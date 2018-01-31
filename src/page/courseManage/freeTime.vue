<template>
  <div class="free-content">
    <div class="free-title commonTitle">
      <div class="free-title-main commonTitleMain">
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
          <div class="free-table-main">
            <div class="free-table-header">
              <table cellspacing="0" cellpadding="0" border="0">
                <colgroup>
                  <col width="16%">
                  <col width="12%">
                  <col width="12%">
                  <col width="12%">
                  <col width="12%">
                  <col width="12%">
                  <col width="12%">
                  <col width="12%">
                </colgroup>
                <thead>
                  <tr>
                    <th>时间</th>
                    <th v-for="(date,$index) in freeTimeWeekColumns">
                      <div>
                        <p>{{ date.name }}</p>
                        <p>{{ date.title }}</p>
                        <label
                          :for="'title'+$index"
                          v-if="date.title!=''"
                          class="free-table-checkbox"
                          @click="check($index)"
                          :class="{selected:date.allSelect}"
                        >全</label>
                        <input :id="'title'+$index" type="checkbox" v-if="date.title!=''" style="display: none">
                      </div>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="free-table-detail">
              <table cellspacing="0" cellpadding="0" border="0">
                <colgroup>
                  <col width="16%">
                  <col width="12%">
                  <col width="12%">
                  <col width="12%">
                  <col width="12%">
                  <col width="12%">
                  <col width="12%">
                  <col width="12%">
                </colgroup>
                <tbody>
                  <tr v-for="(time,timeIndex) in freeTimeTamp">
                    <td>{{ time.time }}</td>
                    <td v-for="(item,itemIndex) in weekList">
                      <span
                        :class="{selected:item[timeIndex].selected}"
                        @click="item[timeIndex].selected=!item[timeIndex].selected"
                      ><Icon type="checkmark-round" v-if="item[timeIndex].selected"></Icon></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
        week:null,  //周
        wIndex:0, //周下标
        monthList:[],  //左侧选项卡数据
        mIndex:null, //月下标
        weekList: [],//周数据
        submitDisabled:true,
        freeTimeListUrl:this.$store.state.freeTimeList,
        freeTimeData:[],  //月数据
        freeTimeDataList:[],  //月处理后数据
        freeTimeColumns:[],
        freeTimeWeekColumns:[],
        freeTimeTamp:[
          {time:'07:00 - 08:00'},
          {time:'08:00 - 09:00'},
          {time:'09:00 - 10:00'},
          {time:'10:00 - 11:00'},
          {time:'11:00 - 12:00'},
          {time:'12:00 - 13:00'},
          {time:'13:00 - 14:00'},
          {time:'14:00 - 15:00'},
          {time:'15:00 - 16:00'},
          {time:'16:00 - 17:00'},
          {time:'17:00 - 18:00'},
          {time:'18:00 - 19:00'},
          {time:'19:00 - 20:00'},
          {time:'20:00 - 21:00'},
          {time:'21:00 - 22:00'},
          {time:'22:00 - 23:00'},
          {time:'23:00 - 24:00'},
        ]

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
          this.week = data.week-1;
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
          this.monthChange(this.monthList[0].dateISO,0,true) //初始化
        }).catch(() => { //失败获取系统时间
          let newDate = new Date();
          this.year = newDate.getFullYear();
          this.month = newDate.getMonth() + 1;
          this.wIndex ='0-0';
          this.week = 0;
        })
      },
      monthChange(yyyymm,monthIndex,first){  //改变月
        if(this.mIndex != monthIndex){  //重复点击无效
          this.mIndex = monthIndex;
          this.$axios.get(this.freeTimeListUrl,{
            params:{
              'dateTime':yyyymm,
            }
          }).then( res => {
            this.freeTimeData = res.data.data; //获取月数据
            this.freeTimeDataList = []; //月数据初始化
            this.freeTimeColumns = []; //表头数组初始化
            for (let i = 0;i<this.freeTimeData.length;i++){  //循环月数据（6周）
              let list = this.freeTimeData[i]; //周数据
              let timeListData = []; //周数据数组初始化
              let freeTimeColumnsData = [  //表头数据（6周）
                { name : 'MON' ,title:'' , allSelect:false },
                { name : 'TUE' ,title:'' , allSelect:false },
                { name : 'WED' ,title:'' , allSelect:false },
                { name : 'THU' ,title:'' , allSelect:false },
                { name : 'FRI' ,title:'' , allSelect:false },
                { name : 'SAT' ,title:'' , allSelect:false },
                { name : 'SUN' ,title:'' , allSelect:false },
              ];
              this.freeTimeColumns.push(freeTimeColumnsData);

              for(let j = 0;j<list.length;j++) { //循环周数据（7天）
                this.freeTimeColumns[i][j].title = list[j].freetimeDate; //表头日期赋值
                let timeList = [  //天数据（每天含有7-23点，是否选中）
                  {time:'07:00 - 08:00', selected:false},
                  {time:'08:00 - 09:00', selected:false},
                  {time:'09:00 - 10:00', selected:false},
                  {time:'10:00 - 11:00', selected:false},
                  {time:'11:00 - 12:00', selected:false},
                  {time:'12:00 - 13:00', selected:false},
                  {time:'13:00 - 14:00', selected:false},
                  {time:'14:00 - 15:00', selected:false},
                  {time:'15:00 - 16:00', selected:false},
                  {time:'16:00 - 17:00', selected:false},
                  {time:'17:00 - 18:00', selected:false},
                  {time:'18:00 - 19:00', selected:false},
                  {time:'19:00 - 20:00', selected:false},
                  {time:'20:00 - 21:00', selected:false},
                  {time:'21:00 - 22:00', selected:false},
                  {time:'22:00 - 23:00', selected:false},
                  {time:'23:00 - 24:00', selected:false},
                ];
                timeListData.push(timeList); //周数据数组
                let dataList = list[j].freetimePeriodList; //当天空闲时间
                if(dataList.length != 0){  //循环当天空闲时间
                  for(let z = 0;z<dataList.length;z++){
                    // 空闲时间-7对应左侧时间下标（7:00开始）
                    timeListData[j][parseInt(dataList[z].substring(0, 2))-7].selected = true;
                  }
                }
              }
              this.freeTimeDataList.push(timeListData); //月数据Push周数据
            }


            if(!first) {
              this.weekChange (monthIndex,0); //不是首次默认选中第一周
            } else {
              this.weekChange (monthIndex,this.week); //默认选中本周
            }
          })
        } else {
          return false;
        }
      },
      weekChange (monthIndex,weekIndex) {  //改变周
        this.wIndex = monthIndex + '-' + weekIndex; //选中下标（class）
        this.weekList = this.freeTimeDataList[weekIndex]; //本周数据
        this.freeTimeWeekColumns = this.freeTimeColumns[weekIndex];
        this.monthList[monthIndex].week[weekIndex].selected = true; //选中状态

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

      },
      save () {

      },
      check(index){ //全选
        this.freeTimeWeekColumns[index].allSelect = !this.freeTimeWeekColumns[index].allSelect;
          if(this.freeTimeWeekColumns[index].allSelect) {
          for(let item of this.weekList[index]){
            item.selected = true;
          }
        } else {
          for(let item of this.weekList[index]){
            item.selected = false;
          }
        }
      },
    },
    components:{

    }
  }
</script>

