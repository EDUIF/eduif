import Models from './src/index.vue';
import * as IconsName from './src/IconsName';

export * as IconsName from './src/IconsName';

Models.install = function(Vue) {
  /**
   * ===========================================================================
   *  注入到配置文件
   * ===========================================================================
   */
  if (!Vue.prototype.$EDMENT) Vue.prototype.$EDMENT = {};
  Vue.prototype.$EDMENT.IconsName = IconsName;
  Vue.component(Models.name, Models);
};

export default Models;
