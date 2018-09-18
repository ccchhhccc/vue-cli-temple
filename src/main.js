// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Iview from 'iview'
import VueLazyload from 'vue-lazyload'
import 'iview/dist/styles/iview.css';
import store from './store'
Vue.config.productionTip = false

// 图片懒加载
Vue.use(VueLazyload, {
  loading: require('assets/img/logo.jpg')
})
Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
