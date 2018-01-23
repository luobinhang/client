/**
 *
 * 《嗨课堂客户端公共方法》
 *
 * 版本 v1.0
 * 作者 Binhang Luo
 * 时间 2017.12.16
 *
 */
import Vue from 'vue';
import { Notice,Message,Modal,Spin } from 'iview';
import apiBase from './api.config';
import axios from "axios";
import qs from "qs";
import stores from "../../store/store";
import Moment from 'moment';

/*
 *
 * 封装moment.js
 * 日期处理函数
 * 12.4KB
 *
 * */
Moment.locale('zh-cn');
Vue.prototype.moment = Moment;



/*
 *
 * 封装获取URL参数
 *
 * */

export function GetQueryString (name) {
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)return  unescape(r[2]); return null;
}



/*
*
* AXIOS封装
*
* */

let AJAX_NUM = 0;
const token = sessionStorage.getItem('token');
const Axios = axios.create({
  baseURL: apiBase('api'),
  timeout: 5000,
  responseType: "json",
  withCredentials: true, // 允许带cookie
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
  data:{},
});

//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 未登录(本地测试使用)

      // if ( token === null || token === undefined) {
      //
      //   window.location.href = '../../static/login.html';
      //
      // }

    // else {

      //loading显示
      AJAX_NUM++;
      stores.dispatch('FETCH_LOADING','true');

      // if (
      //   config.method === "post" ||
      //   config.method === "put" ||
      //   config.method === "delete"
      // ) {
        // 序列化
        // config.data = qs.stringify(config.data);
      // }


      // 若是有做鉴权token , 就给头部带上token
      if (token) {
        config.headers.token = token;
      }

    // }
    return config;

  },
  error => {

    Notice.error({
      title: res.data.message,
      desc: '',
      duration:2,
    });

    return Promise.reject(error.data.message);
  }
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {

    //loading隐藏
    AJAX_NUM--;
    if(AJAX_NUM <= 0){
      stores.dispatch('FETCH_LOADING', 'false');
    }

    if (res.data.code != 0) {
      Notice.error({
        title: res.data.message,
        desc: '',
        duration:2,
      });
      return Promise.reject(res.data.message);

    } else {

      return res;

    }

  },
  error => {
    AJAX_NUM = 0;
    stores.dispatch('FETCH_LOADING', 'false');
    Notice.error({
      title: '网络异常 '+ error,
      desc: '',
      duration:2,
    });

  }
);
Vue.prototype.$axios = Axios;



/*
*
* C++外部调用函数
*
* */

window._client_user_web_methods_ = {
  uploadProgess (res) {   //c++调用上传课件回调
    let as = JSON.parse(res["args"]).state;
    if (as == 0) {            //c++调用上传中
      Message.loading({
        content: '正在上传中...',
        duration: 0
      });
    } else if ( as == 1 ) {  //c++调用上传成功
      Message.destroy();
      Message.success('上传成功');
    } else if ( as == 2 ) {  //c++调用上传失败
      Message.destroy();
      Notice.error({
        title: '课件上传失败',
        desc: '请手动转换pdf格式再上传，或检查网络后重试！转换地址：' +
        '<span onclick="copyText()" style="cursor: pointer">https://smallpdf.com/cn</span>' +
        '<input id="copyText" type="text" value="https://smallpdf.com/cn" style="opacity: 0;position: absolute;z-index: -99;top: -9999px;">',
        duration:0,
      });
    }
  },
  enterProgess (res) {
    let as = JSON.parse(res["args"]).state;
    if (as == 0) {            //c++调用进入中
      Message.loading({
        content: '正在进入教室',
        duration: 0
      });
    } else if ( as == 1 ) {  //c++调用进入成功
      Message.destroy();
      Message.success('进入房间成功');
    } else if ( as == 2 ) {  //c++调用进入失败
      Message.destroy();
      Message.error('进入房间失败');
    }
  },
  refresh () {
    window.location.reload();
  },
  copyText () {
    let ele = document.getElementById("copyText");
    ele.select();
    document.execCommand("Copy");
    Message.destroy();
    Message.info('链接复制成功');
  }
};



/*
 *
 * 获取当前时间戳
 *
 * */

export function timestamp(){

  let getTimestap =  new Promise(function(resolve, reject){
    Axios.get(stores.state.timestamp).then( res => {
      let timestamp = res.data.data.serverTime;
      let date = Moment(timestamp);
      let time = {
        timestamp : timestamp,
        date : date,
        year : date.year(),
        month : date.month() + 1,
        week : date.week(),
        day : date.date(),
        hour : date.hour(),
        minute : date.minute(),
        second : date.second(),
        dateISO : date.format('YYYY-MM-DD')
      };
      resolve(time);
    });
  });

  return getTimestap;

}



/*
 *
 * 添加Class
 *
 * */

export function addClass(element, new_name) {
  if (!element || !new_name) return false;
  if (element.className) {
    var old_class_name = element.className;
    element.className = old_class_name + " " + new_name;
  } else{
    element.className = new_name;
  }
  return true;
}



/*
 *
 * 删除Class
 *
 * */

export function removeClass(element, class_name) {
  if(!element || !class_name) return false;
  if (!element.className) return false;
  var all_names = element.className.split(" ");
  for (var i = 0; i < all_names.length; i++) {
    if (all_names[i] === class_name) {
      all_names.splice(i, 1);
      element.className = "";
      for (var j = 0; j < all_names.length; j++) {
        element.className += " ";
        element.className += all_names[j];
      }
      return true;
    }
  }
}



/*
 *
 * 秒转分秒
 *
 * */

export function forMatTime(j) {
  var ex = Math.ceil(j),
    g = Math.floor(ex / 3600),
    d = Math.floor(ex / 60) % 60,
    f = ex % 60,
    k = (d > 9 ? d : "0" + d) + ":" + (f > 9 ? f : "0" + f);
    if (g > 0) {
      k = g + ":" + k;
    }
  return k;
}