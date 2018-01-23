<template>
  <div class="content">
    <div class="recordWarpper">
      <!-- 一对一或者小班课 tab栏 （暂时隐藏） -->
      <div class="class-tab">
        <ul class="clear">
          <li
            class="class-tab-btn"
            v-for="(item,$index) in classTab"
            @click="tab($index)"
            :class='{active: i==$index}'>
            {{ item.value }}</li>
        </ul>
      </div>
      <div class="record-main">
        <!-- 条件搜索 -->
        <div class="courseRecordSelect">
          <span>请选择学科</span>
          <Select v-model="formData.subject" style="width:100px">
            <Option
              v-for="item in subjectList"
              :value="item.value"
              :key="item.value">
              {{ item.label }}</Option>
          </Select>
          <span>上课时间</span>
          <DatePicker
            type="daterange"
            @on-change="dateSelect"
            placement="bottom-end"
            placeholder="选择日期"
            style="width: 200px"></DatePicker>
          <button
            type="search"
            class="courseRecordSearch"
            @click="getCourseRecord('search')">
            查询</button>
        </div>
        <!-- 老师课程记录列表（无法观看课程回放） -->
        <div class="class-list clear" v-if="show">
          <div class="class-list-main1">
            <ul class="class-list-main">
              <li class="clear" v-for="(item,$index) in courseRecordData">
                <div class="class-img">
                  <img src="../../assets/images/pic1.png" alt="pic">
                </div>
                <div class="class-content">
                  <p>科目 ： {{ item.subject }}</p>
                  <p>学生 ： {{ item.name || item.teacherName }}</p>
                  <p>课程时间 ： {{ item.courseDate }} {{ item.startTime }} - {{ item.endTime }}</p>
                </div>
              </li>
            </ul>
            <div class="page-main">
              <Page :total="pageTotal" :page-size="6" show-elevator @on-change="changePage"></Page>
            </div>
          </div>
        </div>
        <!-- 没有课程记录显示区域 -->
        <div class="main" v-else>
          <div class="null-class">
            <div>
              <div class="null-img">
                <img src="../../assets/images/null.png" alt="null">
              </div>
              <p>暂时没有课程记录</p>
              <p>您可以拨打电话<span>400-876-3300</span>或登录<a href="javascript:;" @click="target()">嗨课堂官网</a>进行咨询预约课程</p>
              <button><a href="javascript:;" @click="target()">马上去选课</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import { GetQueryString } from '../../common/js/common';

  const token = sessionStorage.getItem('token')
  export default {
    data () {
      return {
        i:0,
        iframe:'',
        pageTotal:0,
        carouselIndex:0,
        videoWarpper:false,
        courseRecordData : [],
        show: true,
        url:'',
        subjectList : this.$store.state.subjectList,
        formData : {
          subject: "",
          startDate: "",
          endDate: "",
          pageNo:1,
          pageSize:6,
        },
        classTab:this.$store.state.classTab,
      }
    },
    mounted (){
      this.getCourseRecord ();
    },
    methods: {
      dateSelect (data) {  //搜索时间条件
        this.formData.startDate = data[0];
        this.formData.endDate = data[1];
      },
      tab ($index) {  //上课类型tab栏切换
        this.i = $index;
        this.getCourseRecord();
      },
      getCourseRecord ( search ) {  //获取课程记录
        if(search == 'search'){
          this.formData.pageNo = 1;
        }
        if (this.i == 0) { //教师一对一
          this.url = this.$store.state.teacherCourseRecordV1List;
          this.courseRecordSearch(this.url,search);
          this.less = true;
        }else if(this.i == 1){ //教师一对多
          this.url = this.$store.state.teacherCourseRecordList;
          this.courseRecordSearch (this.url,search);
          this.less = false;
        }
      },
      courseRecordSearch (url,search) {  //获取课程记录列表
        this.$axios.get(url,{
          params : this.formData,
        })
        .then( res => {
          this.courseRecordData = res.data.data.list;
          this.pageTotal = res.data.data.total;
          if(search == 'search'){
            this.$Message.success('查询完成');
            this.iframe = '';
          }
          if(res.data.data.list.length == 0){
            this.show = false;
          }else{
            this.show = true;
          }
          const args = '{ "requesttype" : 15 ,"type" : "course"}';
          sendData(args);
        })
      },
      changePage (pageIndex) {   //切换pages
        this.formData.pageNo = pageIndex;
        this.courseRecordSearch(this.url);
      },
      start (uuid) {  //查看回放
        let xp = GetQueryString('xp')==1?1:0;
        this.videoWarpper = true;
        this.iframe = '';
        this.iframe = '<iframe src="../../static/play.html?token='+ token +'&uuid='+ uuid +'&xp='+ xp +'" id="iframe" width="100%" height="100%" frameborder="no" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" allowfullscreen="true"></iframe>';
      },
      target(){  //打开网页
        let args = '{ "requesttype" : 13,' +
          '"url" : "www.onlyhi.cn"' +
          '}';
        sendData(args);
      }
    },
  }
</script>

<style scoped>
  @import '../../style/courseRecord.css';
</style>
<style>
  .record-main .ivu-carousel-list{
    height: 100%;
  }
  .record-main .ivu-carousel-track,.record-main .ivu-carousel-item{
    height: 100% !important;
  }
  .record-main .ivu-carousel-arrow.right{
    right: -40px;
  }
  .record-main .ivu-carousel-arrow.left {
    left: -40px;
  }
  .record-main .ivu-carousel-arrow{
    top:25%;
  }
  .ivu-table td, .ivu-table th{
    height: 50px;
    text-align: center;
  }
</style>
