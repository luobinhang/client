<template>
  <div class="crContainer">
    <div class="commonTitle">
      <div class="crHeader commonTitleMain">
        <p>课程记录</p>
        <div>
          <span>科目：</span>
          <Select v-model="formData.subject" @on-change="selectSubject" class="classSubject"
                  style="width:70px;height:27px;margin-right: 28px;">
            <Option v-for="item in subjectList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <span>时间：</span>
          <Row>
            <DatePicker type="daterange" placement="bottom-end" placeholder="选择日期" @on-change="selectDate"
                        style="width: 200px"></DatePicker>
          </Row>
        </div>
      </div>
    </div>
    <div class="crHeader2">
      <div class="crHeader2-main">
        <p>{{dateTime}}</p>
        <p>
          <span v-for="(item,$index) in classType" :classType="$index" :class="{active:i==$index}"
                @click="selectClassType($index)">{{item}}</span>
        </p>
      </div>
    </div>
    <div class="crBody" @scroll="changeDate($event)">
      <div v-for="(cr,$index) in courseRecord">
        <div class="crItem">
          <p class="crTitle"  ref="courseDate" v-show="$index!=0">{{cr.list[0].courseDate}}</p>
          <ul class="courseList">
            <li class="card" v-for="item in cr.list">
              <div v-if="item.video!=''" class="courseHead">
                <img :src="item.imgUrl" alt="课程封面图">
                <p class="playVideo">
                  <img src="../../assets/images/play.png" @click="start(item.courseUuid)" alt="播放">
                </p>
              </div>
              <div v-else class="courseHead" style="background-color: #c3c8ca;">
                <p class="notFound"><img src="../../assets/images/notFound.png" alt="无视频">检测不到回顾视频</p>
              </div>
              <div class="courseBody">
                <div>
                  <p>{{item.subject}}</p>
                  <p>{{item.studentName}}</p>
                </div>
                <div>
                  <p>{{item.startTime}}- {{item.endTime}}</p>
                  <p>{{item.grade}}<span>{{item.subjectVersion}}</span></p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--观看课程视频-->
    <div class="videoWarp" v-if="videoWarpper" @click="closeVideo($event)">
      <div class="videoContain" ref="videoContain">
        <div class="videoHead" ref="videohead">
          <img src="../../assets/images/close2.png" @click="videoWarpper=false" alt="关闭视频">
        </div>
        <div class="videoBody" ref="videoBody" v-html="iframe"></div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  @import '../../style/courseRecord.less';
</style>
<script>
  import {timestamp} from '@/common/js/common';
  import {GetQueryString} from '../../common/js/common';
  const token = sessionStorage.getItem('token')
  export default {
    data() {
      return {
        subjectList: [
          {value: '全部', label: '全部'},
          {value: '语文', label: '语文'},
          {value: '数学', label: '数学'},
          {value: '英语', label: '英语'},
          {value: '物理', label: '物理'},
          {value: '化学', label: '化学'},
          {value: '生物', label: '生物'},
          {value: '政治', label: '政治'},
          {value: '历史', label: '历史'},
          {value: '地理', label: '地理'},
          {value: '科学', label: '科学'},
        ],
        dateTime: "",
        classType: ["全部", "测评课", "正式课"],
        i: 0,
        formData: {
          subject: '全部',
          startDate: "",
          endDate: "",
          classType: 0,
          pageNo: 1,
          pageSize: 6,
        },
//      courseRecord:[],
        courseRecord: this.$store.state.cwList,
        videoWarpper: false,
        iframe: ""
      }
    },
    beforeMount() {

    },
    mounted() {
    },
    created: function () {
      this.courseRecordList();
    },
    methods: {
//      科目选择
      selectSubject(value) {
        this.formData.subject = value;
        this.courseRecordList()
      },
//      日期时间选择
      selectDate(date) {
        this.formData.startDate = date[0];
        this.formData.endDate = date[1];
        this.courseRecordList();
      },
//      课程类型选择
      selectClassType(index) {
        this.i = index;
        this.formData.classType = index;
        this.courseRecordList();
      },
//      查询课程记录列表
      courseRecordList() {
        this.$axios.get(this.$store.state.teacherCourseRecordList, {params: this.formData})
          .then(res => {
//          this.courseRecord = res.data.data;
//          if( this.courseRecord[0].total!= 0){
//            this.dateTime=this.courseRecord[0].list[0].courseDate;
//          }
            this.dateTime = this.courseRecord[0].list[0].courseDate;

          })
      },
//      播放课程记录视频
      start(uuid) {  //查看回放
        let xp = GetQueryString('xp') == 1 ? 1 : 0;
//        alert(xp);
        this.videoWarpper = true;
        this.iframe = '';
        this.iframe = '<iframe src="../../static/play.html?token=' + token + '&uuid=' + uuid + '&xp=' + xp + '" id="iframe" width="100%" height="100%" frameborder="no" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" allowfullscreen="true"></iframe>';
      },
//      点击空白区域，关闭视频
      closeVideo(e){
        if (!this.$refs.videoContain.contains(e.target)) {
          this.videoWarpper=false;
        }
      },
//      日期切换
      changeDate(e){
        let crItem = document.getElementsByClassName("crItem");
        let scrollTop=e.target.scrollTop;
//        console.log(scrollTop,crItem);
        for(let i = 0;i<crItem.length;i++){
          if(scrollTop>= crItem[i].offsetTop) {
            this.dateTime = crItem[i].children[0].innerHTML;
          }
//          console.log(item.offsetTop);
        }
      }
    }
  }
</script>
