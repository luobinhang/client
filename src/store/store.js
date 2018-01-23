import Vue from 'vue';
import Vuex from 'vuex';


import * as types from './type.js';

Vue.use(Vuex);


const state = {
  // 请求数据时加载状态loading
  fetchLoading: 'false',
  subjectList : types.SUBJEXT_LIST,
  classTab : types.CLASS_TAB,
  helpMainTeacher : types.HELP_MAIN_TEACHER,
  helpMainStudent : types.HELP_MAIN_TEACHER,
  noticeList : types.NOTICE_LIST,
  dateList : types.DATE_LIST,
  classList : types.CLASS_LIST,
  classTip : types.CLASS_TIP,
  wagesList:types.WAGES_LIST,
  salaryList:types.SALARY_LIST,
  rewardList:types.REWARD_LIST,
  scheduleType:types.SCHEDULE_TYPE,
  cwList:types.CW_LIST,
};

const getters = {
  // 请求数据时加载状态
  fetchLoading: state => state.fetchLoading
};


const actions = {
  // 请求数据时状态loading
  FETCH_LOADING( { commit } , res) {
    commit(types.FETCH_LOADING, res);
  },
};

const mutations = {
  // 请求数据时loading
  [types.FETCH_LOADING] (state, res) {
    state.fetchLoading = res;
  }
};
export default new Vuex.Store({
  state, getters, mutations , actions
})



