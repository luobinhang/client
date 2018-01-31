<template>
  <div class="schedule-content">
    <div class="schedule-title commonTitle">
      <div class="schedule-title-main commonTitleMain">
        <div>
          <h2>我的课表</h2>
          <ul>
            <li v-for="(item,$index) in scheduleType"
                @click="scheduleTypeChange($index)"
                :class="{ active : $index == scheduleTypeIndex }"
            >{{ item.title }}</li>
          </ul>
        </div>
        <div v-if="scheduleTypeIndex == 0">
          <span class="schedule-tip">
            <em>测评课</em>
            <em>正式课</em>
          </span>
          <i class="icon iconfont icon-xiazai" @click="capture()"></i>
          <a class="down" download="downImg" href=""></a>
        </div>
      </div>
    </div>
    <div class="schedule-main">
      <transition :name="transitionName">
        <weekSchedule v-if="scheduleTypeIndex == 0" @childDom="scheduleDom"></weekSchedule>
        <monthSchedule v-else></monthSchedule>
      </transition>
    </div>
  </div>
</template>

<style lang="less">
  @import '../../style/schedule.less';
</style>

<script>
  import html2canvas from 'html2canvas';
  import weekSchedule from '@/page/courseManage/schedule/week'; //周课表
  import monthSchedule from '@/page/courseManage/schedule/month'; //月课表


  export default {
    data () {
      return {
        scheduleType:[
          { title : '周课表' , type : 'week'},
          { title : '月课表' , type : 'month'},
        ],
        scheduleTypeIndex:0,
        scheduleTableDetail:'',
        transitionName:'vux-pop-in'
      }
    },
    beforeMount () {
    },
    mounted () {
    },
    created: function () {
    },
    methods: {
      scheduleTypeChange($index){ //改变课表类型
        this.scheduleTypeIndex = $index;
        if($index == 0) {
          this.transitionName = 'vux-pop-in';
        } else {
          this.transitionName = 'vux-pop-out';
        }

      },
      capture () {  //截图下载
        html2canvas(this.scheduleTableDetail).then(function(canvas) {
          let e = document.createEvent("MouseEvents")
          e.initEvent("click", true, true);
          let down = document.querySelector(".down");
          down.setAttribute('href',canvas.toDataURL("image/jpg"));
          down.dispatchEvent(e);
        });
      },
      scheduleDom (ele) {
        this.scheduleTableDetail = ele;
      }
    },
    components:{
      monthSchedule,
      weekSchedule
    }
  }
</script>


