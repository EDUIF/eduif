import Models from './src/index.vue';

Models.install = function(vue) {
  vue.component(Models.name, Models);
};

export default Models;
