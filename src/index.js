import EdIcon from '@package/Icon';
import EdInput from '@package/Input';
import EdButton from '@package/Button';
import EdButtonGroup from '@package/ButtonGroup';

const components = [
  EdIcon,
  EdInput,
  EdButton,
  EdButtonGroup,
];

const install = function(Vue, config) {
  config = config || {};
  Vue.prototype.$ELEMENT = {
    size: config.size || 'normal',
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
