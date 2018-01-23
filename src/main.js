import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import './my-theme/index.less';
import store from './store/store';
import  './common/js/common';




Vue.use(iView);



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});


/**
 *
 * 强制修改密码
 *  路由判断
 *
 */
const isFirst = sessionStorage.getItem('isFirst');
router.beforeEach(function (to, from, next) {
  if (isFirst == 'true') {
    next();
    router.go(-1);
  } else {
    next();
  };
});


