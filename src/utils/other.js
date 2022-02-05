/** 获取类型 */
export const getType = target => Object.prototype.toString.call(target).slice(8, -1).toLocaleLowerCase();

/** 判断 key 是否存在 */
export const hasKey = (target, key) => Object.prototype.hasOwnProperty.call(target, key);

/** 类型是否相等 */
export const hasType = (target, type) => getType(target) === type.toLocaleLowerCase();

/** 深拷贝 */
export const deepCopy = target => {
  const value = hasType(target, 'array') ? [] : {};
  Object.keys(target).forEach(keys => {
    const item = target[keys];
    if (['array', 'object'].includes(getType(item))) {
      value[keys] = deepCopy(item);
    } else {
      value[keys] = item;
    }
  });
  return value;
};

/** 限制大小 */
export const limitSize = (target, max = Infinity, min = -Infinity) => Math.min(Math.max(target, min), max);

/** 范围随机数 */
export const scopeRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/** 随机字符串 */
export const randomStr = (long = 1, radix = 36) => {
  const getStr = () => (Math.random() * radix).toString(radix).replace('.', '');
  let value = getStr();
  for (let i = value.length; i < long; i = value.length) {
    value += getStr();
  }
  return value.slice(0, long);
};
