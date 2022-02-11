import { addClass, removeClass } from '@utils/dom';

const onTransition = {
  beforeEnter (dom) {
    addClass(dom, 'collapse-transition');
    if (!dom.dataset) dom.dataset = {};

    dom.dataset.oldPaddingTop = dom.style.paddingTop;
    dom.dataset.oldPaddingBottom = dom.style.paddingBottom;

    dom.style.height = '0';
    dom.style.paddingTop = 0;
    dom.style.paddingBottom = 0;
  },
  enter (dom) {
    dom.dataset.oldOverflow = dom.style.overflow;
    if (dom.scrollHeight !== 0) {
      dom.style.height = dom.scrollHeight + 'px';
      dom.style.paddingTop = dom.dataset.oldPaddingTop;
      dom.style.paddingBottom = dom.dataset.oldPaddingBottom;
    } else {
      dom.style.height = '';
      dom.style.paddingTop = dom.dataset.oldPaddingTop;
      dom.style.paddingBottom = dom.dataset.oldPaddingBottom;
    }

    dom.style.overflow = 'hidden';
  },
  afterEnter (dom) {
    removeClass(dom, 'collapse-transition');
    dom.style.height = '';
    dom.style.overflow = dom.dataset.oldOverflow;
  },
  beforeLeave (dom) {
    if (!dom.dataset) dom.dataset = {};
    dom.dataset.oldPaddingTop = dom.style.paddingTop;
    dom.dataset.oldPaddingBottom = dom.style.paddingBottom;
    dom.dataset.oldOverflow = dom.style.overflow;

    dom.style.height = dom.scrollHeight + 'px';
    dom.style.overflow = 'hidden';
  },
  leave (dom) {
    if (dom.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weired
      addClass(dom, 'collapse-transition');
      dom.style.height = 0;
      dom.style.paddingTop = 0;
      dom.style.paddingBottom = 0;
    }
  },
  afterLeave (dom) {
    removeClass(dom, 'collapse-transition');
    dom.style.height = '';
    dom.style.overflow = dom.dataset.oldOverflow;
    dom.style.paddingTop = dom.dataset.oldPaddingTop;
    dom.style.paddingBottom = dom.dataset.oldPaddingBottom;
  },
};

export default {
  functional: true,
  name: 'EdCollapseTransition',
  render (h, { children }) {
    return h('transition', { on: onTransition }, children);
  },
};
