<template>
  <div class="home-class-tip card">
    <div class="home-class-tip-main">
      <h2>课程提醒</h2>
      <table>
        <colgroup>
          <col width="50">
          <col width="110">
          <col width="50">
          <col width="180">
          <col width="80">
        </colgroup>
        <tr v-for="(item,$index) in todayClassTip" :class="{active:enter&&$index==0}">
          <td>今天</td>
          <td>{{ item.startTime }} - {{ item.endTime }}</td>
          <td>{{ item.subject }}</td>
          <td>学生：{{ item.studentName }}</td>
          <td><Button type="error" v-if="enter&&$index==0">进入教室</Button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import { timestamp } from '@/common/js/common';
  export default {
    data () {
      return {
        enter:false,
        todayClassTip:[], //今天课程提醒
        todayNoEndCourseList:this.$store.state.todayNoEndCourseList, //今天课程提醒接口
      }
    },
    beforeMount () {
    },
    mounted () {
      timestamp().then( data => {
        this.getClassTip(data.timestamp);
      });
    },
    created: function () {
    },
    methods: {
      getClassTip(timestamp) { //课程提醒
        this.$axios.get(this.todayNoEndCourseList)
          .then( res => {
            if(res.data.data.total == 0 ) {
              return false;
            } else {
              this.todayClassTip = res.data.data.list;
              let ISOtime = this.todayClassTip[0].courseDate + ' ' + this.todayClassTip[0].startTime;
              let second = (new Date(ISOtime).getTime() - timestamp)/1000;
              if(second <= 1200) { //小于20分钟可以进入教室
                this.enter = true;
              } else {
                let interval = setInterval(()=>{
                  second--;
                  if(second <= 1200){
                    clearInterval(interval);
                    this.enter = true;
                  }
                },1000)
              }
            }
          })
      },


    },
  }
</script>

