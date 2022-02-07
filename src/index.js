import EdIcon, { IconsName } from '@package/Icon';
import EdInput from '@package/Input';
import EDAlert from '@package/Alert';
import EdButton from '@package/Button';
import EdButtonGroup from '@package/ButtonGroup';

const components = [
  EdIcon,
  EdInput,
  EDAlert,
  EdButton,
  EdButtonGroup,
];

const install = function(Vue, config) {
  config = config || {};
  Vue.prototype.$EDMENT = {
    IconsName,
    size: config.size || 'normal',
    zIndex: config.zIndex || 2000,
  };
  components.forEach(component => {
    console.log(component.name)
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.1',
  IconsName,
  install,
};
