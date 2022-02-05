const components = [];

const install = function(Vue, config) {
  Vue.prototype.$ELEMENT = {
    size: config.size || '',
    zIndex: config.zIndex || 2000,
  };
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.1',
  install,
};