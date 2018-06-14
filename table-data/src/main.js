// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.axios = axios;
import './assets/lib/common.css'
import './assets/lib/pc-common.css'
import './assets/css/commond.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import cascaderMulti from 'cascader-multi';
import iviewArea from 'iview-area';
Vue.config.productionTip = false
Vue.use(iView);
Vue.use(cascaderMulti);
Vue.use(iviewArea);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
