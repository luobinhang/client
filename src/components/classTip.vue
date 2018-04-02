<template>
  <div class="home-class-tip card">
    <div class="home-class-tip-main">
      <h2>课程提醒</h2>
      <div class="home-class-tip-table">
        <table  cellpadding="0" cellspacing="0" v-if="todayClassTip.length !== 0">
          <colgroup>
            <col width="50">
            <col width="110">
            <col width="50">
            <col width="180">
            <col width="80">
          </colgroup>
          <tr v-for="(item,$index) in todayClassTip" :class="{active:item.enter}">
            <td>今天</td>
            <td>{{ item.startTime }} - {{ item.endTime }}</td>
            <td>{{ item.subject }}</td>
            <td>学生：{{ item.studentName }}</td>
            <td><Button type="error" v-if="item.enter" @click="start($index,item.courseUuid,item)">进入教室</Button></td>
          </tr>
        </table>
        <div class="classTipNull tip-null" v-else>
          <img src="../assets/teacher/null.png" alt="null">
          <span class="tip-null-text">暂无课程提醒哦~</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { timestamp } from '@/common/js/common';
  let interval = new Array(); //定时器集合
  export default {
    data () {
      return {
        enter:false,
        interval:null,
        todayClassTip:[], //今天课程提醒
        todayNoEndCourseList:this.$store.state.todayNoEndCourseList, //今天课程提醒接口
      }
    },
    mounted () {
      timestamp().then( data => {
        this.getClassTip(data.timestamp);
      });
    },
    methods: {
      getClassTip(timestamp) { //课程提醒
        this.$axios.get(this.todayNoEndCourseList)
          .then( res => {
            if( res.data.data.total == 0 ) {
              return false;
            } else {
              this.todayClassTip = res.data.data.list;
              for(let i = 0;i<this.todayClassTip.length;i++) {
                let list = this.todayClassTip[i];
                Object.assign(list, { enter: false });
                let ISOtime = `${list.courseDate.replace(/-/g,'/')} ${list.startTime}`;
                let second = (new Date(ISOtime).getTime() - timestamp)/1000;
                if(second <= 1200) { //小于20分钟可以进入教室
                  Object.assign(list, { enter: true });
                } else {
                  interval[i] = setInterval(()=>{
                    second--;
                    if(second <= 1200){
                      clearInterval(interval[i]);
                      Object.assign(list, { enter: true });
                    }
                  },1000)
                }
              }
            }
          })
      },
      start($index, uuid, item) {  //进入房间
        this.$axios({
          method: "post",
          url: this.$store.state.getCourseRoom,
          data: {
            'courseUuid': uuid,
          },
        }).then(res => {
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
                          '"tabId" : "' + this.i + '",' +
                          '"value":'+ JSON.stringify(item) +''+
                        '}' +
                      '}';
          sendData(args);
        })
      },
    },
    destroyed () {
      for(let i of interval){
        clearInterval(i);
      }
    }
  }
</script>

