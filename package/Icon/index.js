import EdIcon from './src/Icon.vue';
import * as IconsName from './src/IconsName';

export * as IconsName from './src/IconsName';

EdIcon.install = function(Vue) {
  /**
   * ===========================================================================
   *  注入到配置文件
   * ===========================================================================
   */
  if (!Vue.prototype.$EDMENT) Vue.prototype.$EDMENT = {};
  Vue.prototype.$EDMENT.IconsName = IconsName;
  Vue.component(EdIcon.name, EdIcon);
};

export default EdIcon;
