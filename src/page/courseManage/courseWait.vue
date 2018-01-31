<template>
  <div class="cwContainer">
    <div class="commonTitle">
      <div class="commonTitleMain">
        <h2>待上课程</h2>
      </div>
    </div>
    <div class="cwBody">
      <div class="courseList" v-for="(cw,$index) in cwList">
        <p class="cwDate">{{ dayList[$index] }}<!--{{cw.list[0].courseDate}}--><span>（共{{cw.total}}节）</span></p>
        <ul>
          <!--测评课evaluation,正式课official-->
          <li class="card evaluation" v-for="(item,index) in cw.list"
              :class="{ 'evaluation': item.courseType==0, 'official': item.courseType==1}">
            <div class="courseMain">
              <div class="courseDetail">
                <div>
                  <span>{{ item.subject }}</span>
                  <span>{{ item.startTime }} - {{ item.endTime }}</span>
                  <div class="detail" v-if="item.courseType==0" @mouseenter="tipShow($index + '-' + index)"
                       @mouseleave="tipHide()">
                    详情
                    <div class="studyInfo" v-if="courseTip==$index + '-' + index">
                      <span class="triangleUp2"></span>
                      <span class="triangleUp3"></span>
                      <div class="courseTip">
                        <p><span>试听知识点：</span>作文</p>
                        <p><span>学习情况：</span>{{item.studyStatus}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <span>{{ item.studentName }}
                    <a v-if="item.studentSex==0">(男)</a>
                    <a v-else-if="item.studentSex==1 ">(女)</a>
                  </span>
                  <span>{{item.grade}}</span>
                  <span>{{item.subjectVersion}}</span>
                </p>
              </div>
              <div class="enterRoom">
                <!--非第一个课-->
                <p class="enterClass" v-if="$index+index!=0">进入教室</p>
                <!--第一个课-->
                <!--第一个课不可点击-->
                <p class="enterClass" v-else-if="$index+index==0 && !startClass">进入教室</p>
                <!--第一个课可点击开始上课-->
                <p class="enterClass" v-else-if="$index+index==0 && startClass" :style="{ background: bgColor}"
                   @click="start($index,item.courseUuid)">进入教室</p>
                <!--<p class="lateTime" v-if="lateTime>0">迟到{{lateTime}}</p>-->
                <p class="lateTime" v-if="$index+index==0 && lateShow">迟到{{lateTime}}</p>
              </div>
            </div>
            <div v-if="item.courseType==0" class="triangleMain">
              <p class="triangleTop"></p>
              <p class="testSign">测</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  @import '../../style/courseWait.less';
</style>
<script>
  import { timestamp,forMatTime } from '@/common/js/common';
  export default {
    data() {
      return {
        enterClass: false,
        dayList: ['今天', '明天', '后天'],
        cwList: [],
        cwList: this.$store.state.cwList,
        courseTip: "",//详情现实与隐藏
        bgColor: "#5e85c8",
        startClass: false,
        lateTime: 0,
        lateShow: false
      }
    },
    beforeMount() {

    },
    mounted() {
      timestamp().then(data => {
        let date1 = this.moment(data.timestamp).format("YYYY-MM-DD");
        let date2 = this.moment(date1).add(1, 'days').format("YYYY-MM-DD");
        let date3 = this.moment(date1).add(2, 'days').format("YYYY-MM-DD");
        let courseDateList = [date1, date2, date3];
        let timestamp = data.timestamp;
        this.getCWList(courseDateList, timestamp);
      });
    },
    created: function () {
    },
    methods: {
// 获取待上课程列表
      getCWList(courseDateList, timestamp) {
        this.$axios.post(this.$store.state.getNoEndCourseList, {courseDateList: courseDateList}).then(res => {
          this.cwList = res.data.data;
          if (this.cwList[0].total != 0) {
            let ISOtime = this.cwList[0].list[0].courseDate + ' ' + this.cwList[0].list[0].startTime;
            let second = (new Date(ISOtime).getTime() - timestamp) / 1000;
            if (second > 1200) {
              console.log(1);
              //大于20分钟不可进入教室
              let interval = setInterval(() => {
                if (second > 0 && second <= 1200) {
                  second--;
                  this.startClass = true;
                }
                else if (second <= 0) {
                  second = Math.abs(second);
                  second++;
                  this.bgColor = "#da7194";
                  this.startClass = true;
                  this.lateShow = true;
                  this.lateTime = this.moment(second * 1000).format('mm:ss');
                }
                else {
                  second--;
                }
              }, 1000);
            }
            else if (second > 0 && second <= 1200) {
              //小于20分钟可以进入教室
              let interval = setInterval(() => {
                if (second <= 0) {
                  second = Math.abs(second);
                  second++;
                  this.bgColor = "#da7194";
                  this.startClass = true;
                  this.lateShow = true;
                  this.lateTime = this.moment(second * 1000).format('mm:ss');
                }
                else {
                  second--;
                  this.startClass = true;
                }
              }, 1000);
            }
            else {
              // 还未进入教室，迟到正计时
              let interval = setInterval(() => {
                second = Math.abs(second);// 取绝对值
//              console.log(second/60/60);
                second++;
//              console.log(second);
                this.bgColor = "#da7194";
                this.startClass = true;
                this.lateShow = true;
                this.lateTime = forMatTime(second)
              }, 1000);

            }
          }
        })
      },
//      详情显示与隐藏
      tipShow(index) {
        this.courseTip = index;
      },
      tipHide() {
        this.courseTip = '';
      },
//      开始上课
      start($index, uuid) {  //进入房间
        this.$axios({
          method: "post",
          url: this.$store.state.getCourseRoom,
          data: {
            'courseUuid': uuid,
          },
        })
          .then(res => {
            let data = res.data.data;
            let args = '{ "requesttype" : 2,' +
              '"messageid" : ' + $index + ',' +
              '"jscallback" : "coursewareClassback",' +
              '"data" : { ' +
              '"commchannelid" : "' + data.commChannelId + '",' +
              '"signallingchannelid" : "' + data.signallingChannelId + '",' +
              '"recordId" : "' + data.recordId + '",' +
              '"courseType" : "' + data.courseType + '",' +
              '"courseUuid" : "' + uuid + '",' +
              '"tabId" : "' + this.i + '"' +
              '}' +
              '}';
            sendData(args);
          })
      },
      target() {
        let args = '{ "requesttype" : 13,' +
          '"url" : "www.onlyhi.cn"' +
          '}';
        sendData(args);
      },
    },
  }
</script>

