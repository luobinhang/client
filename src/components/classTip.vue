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
        <tr v-for="(item,$index) in todayClassTip" :class="{active:item.enter}">
          <td>今天</td>
          <td>{{ item.startTime }} - {{ item.endTime }}</td>
          <td>{{ item.subject }}</td>
          <td>学生：{{ item.studentName }}</td>
          <td><Button type="error" v-if="item.enter">进入教室</Button></td>
        </tr>
      </table>
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
              for(let i = 0;i<this.todayClassTip.length;i++) {
                this.todayClassTip[i].enter = false;
                let ISOtime = this.todayClassTip[i].courseDate + ' ' + this.todayClassTip[i].startTime;
                let second = (new Date(ISOtime).getTime() - timestamp)/1000;
                if(second <= 1200) { //小于20分钟可以进入教室
                  this.todayClassTip[i].enter = true;
                } else {
                  interval[i] = setInterval(()=>{
                    second--;
                    if(second <= 1200){
                      clearInterval(interval[i]);
                      this.todayClassTip[i].enter = true;
                    }
                  },1000)
                }
              }
            }
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

