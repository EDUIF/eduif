import Vue from 'vue';
import App from './App.vue';
import Eduif from 'eduif';
import 'eduif/scss/index.scss';

Vue.use(Eduif);
Vue.config.productionTip = false;

new Vue({ render: h => h(App) }).$mount('#app');

