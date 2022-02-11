import Vue from 'vue';
import App from './App.vue';
import router from './router';
/** 引入组件 */
import Eduif from 'eduif';
import 'eduif/scss/index.scss';

Vue.use(Eduif);
Vue.config.productionTip = false;

new Vue({ render: h => h(App), router }).$mount('#app');
