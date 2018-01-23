<template>
  <div class="free-content">
    <div class="free-title">
      <div class="free-title-main">
        <div>
          <h2>空闲时间</h2>
        </div>
        <div>
          <Button>存为模板</Button>
          <Button type="primary" :disabled="submitDisabled" :class="{active:!submitDisabled}">提交</Button>
        </div>
      </div>
    </div>
    <div class="free-main">
      <div class="free-date">
        <div
          class="free-date-month"
          v-for="(month,monthIndex) in monthList"
          @click="monthChange(month.dateISO,monthIndex)"
          :class="{ active : mIndex == monthIndex }"
        ><p>{{ month.dateCH }}</p>
          <ul>
            <li
              v-for="(item,weekIndex) in month.week"
              @click="weekChange(monthIndex,weekIndex)"
              :class="{ active : wIndex == monthIndex + '-' + weekIndex }"
              :select="item.selected"
            ><Icon type="checkmark-round" v-show="item.selected"></Icon>
              <span>{{ item.weekName }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="free-table">
        <div class="card">
          <div class="free-table-detail">
            <table cellspacing="0" cellpadding="0" border="0"></table>
          </div>
        </div>
        <h3 class="free-tip">* 注：必须选满一个月才能提交空闲时间</h3>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  @import '../../style/free.less';
</style>

<script>
  import { timestamp } from '@/common/js/common';


  export default {
    data () {
      return {
        year:new Date().getFullYear(),
        month:new Date().getMonth() + 1,
        date:0,
        wIndex:0,
        monthList:[],
        mIndex:0,
        clickNum:0,
        timeList:[  //表列所有数据
          {time:'07:00 - 08:00', list:[]},
          {time:'08:00 - 09:00', list:[]},
          {time:'09:00 - 10:00', list:[]},
          {time:'10:00 - 11:00', list:[]},
          {time:'11:00 - 12:00', list:[]},
          {time:'12:00 - 13:00', list:[]},
          {time:'13:00 - 14:00', list:[]},
          {time:'14:00 - 15:00', list:[]},
          {time:'15:00 - 16:00', list:[]},
          {time:'16:00 - 17:00', list:[]},
          {time:'17:00 - 18:00', list:[]},
          {time:'18:00 - 19:00', list:[]},
          {time:'19:00 - 20:00', list:[]},
          {time:'20:00 - 21:00', list:[]},
          {time:'21:00 - 22:00', list:[]},
          {time:'22:00 - 23:00', list:[]},
          {time:'23:00 - 24:00', list:[]},
        ],
        submitDisabled:true,
      }
    },
    beforeMount () {

    },
    mounted () {
      this.timeSet();
    },
    created: function () {
    },
    methods: {
      timeSet () {  //获取服务器时间
        timestamp().then( data =>{
          this.year = data.year;
          this.month = data.month;
          this.wIndex =0+'-'+(data.week-1);
          let year = data.year;
          let month = data.month;
          for(let i = 0;i<3;i++){ //最近3个月
            let date = {
              dateCH : year + '年' + month + '月',
              dateISO : this.moment(data.timestamp).add(i, 'M').format('YYYY-MM'),
              week : [
                {weekName:'第一周',selected:false},
                {weekName:'第二周',selected:false},
                {weekName:'第三周',selected:false},
                {weekName:'第四周',selected:false},
                {weekName:'第五周',selected:false},
                {weekName:'第六周',selected:false},
              ],
            }
            month++;
            if(month > 12) {
              month = 1;
              year++;
            }
            this.monthList.push(date);
          }
          this.monthList[0].week[data.week-1].selected = true;
        }).catch(() => { //失败获取系统时间
          let newDate = new Date();
          this.year = newDate.getFullYear();
          this.month = newDate.getMonth() + 1;
        })
      },
      monthChange(yyyymm,monthIndex){
        if(this.mIndex != monthIndex){
          this.mIndex = monthIndex;
          this.weekChange (monthIndex,0);
        } else {
          return false;
        }
      },
      weekChange (monthIndex,weekIndex) {
        if (this.wIndex == monthIndex + '-' + weekIndex) {
          return false
        } else {
          this.wIndex = monthIndex + '-' + weekIndex;
          this.monthList[monthIndex].week[weekIndex].selected = true;

          if(monthIndex == 0) { //如果是首月，判断选中个数
            if (this.submitDisabled) { //如果提交按钮禁用，判断选中个数
              let weekList = this.monthList[0].week; //首月星期
              let selectNum = 0; //选中个数
              for(let item of weekList){
                if(item.selected) {
                  selectNum++;
                  if(selectNum >= weekList.length){
                    this.submitDisabled = false;
                  } else {
                    this.submitDisabled = true;
                  }
                }
              }
            }
          }
        }
      },
      save () {

      }
    },
    components:{

    }
  }
</script>

