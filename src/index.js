import EdIcon, { IconsName } from '@package/Icon';
import EdInput from '@package/Input';
import EDAlert from '@package/Alert';
import EdButton from '@package/Button';
import EdButtonGroup from '@package/ButtonGroup';
import EdCollapse from '@package/Collapse';
import EdCollapseItem from '@package/CollapseItem';
import EdProgress from '@package/Progress';
import EdBreadcrumb from '@package/Breadcrumb';
import EdBreadcrumbItem from '@package/BreadcrumbItem';

const components = [
  EdIcon,
  EdInput,
  EDAlert,
  EdButton,
  EdButtonGroup,
  EdCollapse,
  EdCollapseItem,
  EdProgress,
  EdBreadcrumb,
  EdBreadcrumbItem,
];

const install = function(Vue, config) {
  config = config || {};
  Vue.prototype.$EDMENT = {
    IconsName,
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
  IconsName,
  install,
};
