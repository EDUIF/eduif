import Models from '../Collapse/src/item.vue';

Models.install = function(vue) {
  vue.component(Models.name, Models);
};

export default Models;
