import { throwError } from '@utils/error';

const ClassList = function(dom) {
  if (!dom) {
    return throwError('ClassList', 'dom not Undefined');
  }

  if (!(this instanceof ClassList)) {
    return new ClassList(dom);
  }

  const classList = (dom.className || '').trim().split(' ');

  const contains = function(token) {
    return classList.indexOf(token) >= 0;
  };

  const add = function(...tokens) {
    try {
      tokens.forEach((token) => {
        if (!contains(token)) {
          classList.push(token);
        }
      });
      dom.className = classList.join(' ');
      return 1;
    } catch (e) {
      return -1;
    }
  };

  const remove = function(...tokens) {
    try {
      tokens.forEach(token => {
        const index = classList.indexOf(token);
        if (index >= 0) classList.splice(index, 1);
      });
      dom.className = classList.join(' ');
      return 1;
    } catch (e) {
      return -1;
    }
  };

  const toggle = function(token, force) {
    force = force || !hasClass(token);
    if (force) {
      return add(token);
    } else {
      return remove(token);
    }
  };

  return { add, remove, contains, toggle };
};

const getClassList = dom => dom.classList || new ClassList(dom);

export const addClass = (dom, token) => getClassList(dom).add(token);

export const hasClass = (dom, token) => getClassList(dom).contains(token);

export const toggleClass = (dom, token) => getClassList(dom).toggle(token);

export const removeClass = (dom, token) => getClassList(dom).remove(token);
