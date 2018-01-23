<template>
  <div class="schedule-week-main">
    <div class="schedule-date">
      <div class="schedule-date-month">
        <div class="schedule-date-month-prev" @click="datePrev()">
          <Icon type="arrow-left-b"></Icon>
        </div>
        <span>{{ year }}年{{ month }}月</span>
        <div class="schedule-date-month-prev" @click="dateNext()">
          <Icon type="arrow-right-b"></Icon>
        </div>
      </div>
      <div class="schedule-date-week">
        <ul>
          <li v-for="(item,$index) in weekList"
              @click="weekChange($index)"
              :class="{ active : $index == weekIndex }"
          ><span>{{ item }}</span></li>
        </ul>
      </div>
    </div>
    <div class="schedule-table">
      <div class="card">
        <div class="schedule-table-main">
          <div class="schedule-table-header">
            <i></i>
            <Table border :disabled-hover="true" :columns="scheduleColumnsTamp" :data="scheduleDataList" height="42"></Table>
          </div>
          <div class="schedule-table-detail" ref="scheduleTableDetail">
            <Table border :disabled-hover="true" :columns="scheduleColumns" :data="scheduleDataList"></Table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import { timestamp } from '@/common/js/common';

  export default {
    data () {
      return {
        year:new Date().getFullYear(),
        month:new Date().getMonth() + 1,
        date:0,
        weekIndex:0,
        scheduleTypeIndex:0,
        weekList:['第一周','第二周','第三周','第四周','第五周','第六周'],
        timeList:[  //表列所有数据
          {time:'07:00', list:[]},
          {time:'08:00', list:[]},
          {time:'09:00', list:[]},
          {time:'10:00', list:[]},
          {time:'11:00', list:[]},
          {time:'12:00', list:[]},
          {time:'13:00', list:[]},
          {time:'14:00', list:[]},
          {time:'15:00', list:[]},
          {time:'16:00', list:[]},
          {time:'17:00', list:[]},
          {time:'18:00', list:[]},
          {time:'19:00', list:[]},
          {time:'20:00', list:[]},
          {time:'21:00', list:[]},
          {time:'22:00', list:[]},
          {time:'23:00', list:[]},
        ],
        scheduleColumnsTamp:[ //覆盖表头
          {
            key: 'NAME',
            title: '时间',
          },
          {
            key: 'MON',
            title : '',
            renderHeader : (h, params) => {
              return h('div',[
                h('p',params.column.key),
                h('p',this.columentTitle(params.column.title))
              ])
            },
          },
          {
            key: 'TUE',
            title : '' ,
            renderHeader : (h, params) => {
              return h('div',[
                h('p',params.column.key),
                h('p',this.columentTitle(params.column.title))
              ])
            }
          },
          {
            key: 'WED',
            title : '',
            renderHeader : (h, params) => {
              return h('div',[
                h('p',params.column.key),
                h('p',this.columentTitle(params.column.title))
              ])
            },
          },
          {
            key: 'THU',
            title : '',
            renderHeader : (h, params) => {
              return h('div',[
                h('p',params.column.key),
                h('p',this.columentTitle(params.column.title))
              ])
            },
          },
          {
            key: 'FRI',
            title : '',
            renderHeader : (h, params) => {
              return h('div',[
                h('p',params.column.key),
                h('p',this.columentTitle(params.column.title))
              ])
            }
          },
          {
            key: 'SAT',
            title : '',
            renderHeader : (h, params) => {
              return h('div',[
                h('p',params.column.key),
                h('p',this.columentTitle(params.column.title))
              ])
            }
          },
          {
            key: 'SUN',
            title : '',
            renderHeader : (h, params) => {
              return h('div',[
                h('p',params.column.key),
                h('p',this.columentTitle(params.column.title))
              ])
            }
          },
        ],
        scheduleColumns:[ //真实表头
          {
            key: 'NAME',
            title: '时间',
            render : (h,params) => {
              return h('h3',params.row.NAME)
            }
          },
          {
            key: 'MON',
            title : '',
            renderHeader : (h, params) => {
              return h('div',[
                h('p',params.column.key),
                h('p',this.columentTitle(params.column.title))
              ])
            },
            render : (h, params) => {
              return this.renderItem(h,params,params.row.MON);
            }
          },
          {
            key: 'TUE',
            title : '' ,
            renderHeader : (h, params) => {
              return h('div',[
                h('p',params.column.key),
                h('p',this.columentTitle(params.column.title))
              ])
            },
            render : (h, params) => {
              return this.renderItem(h,params,params.row.TUE);
            }
          },
          {
            key: 'WED',
            title : '',
            renderHeader : (h, params) => {
              return h('div',[
                h('p',params.column.key),
                h('p',this.columentTitle(params.column.title))
              ])
            },
            render : (h, params) => {
              return this.renderItem(h,params,params.row.WED);
            }
          },
          {
            key: 'THU',
            title : '',
            renderHeader : (h, params) => {
              return h('div',[
                h('p',params.column.key),
                h('p',this.columentTitle(params.column.title))
              ])
            },
            render : (h, params) => {
              return this.renderItem(h,params,params.row.THU);
            }
          },
          {
            key: 'FRI',
            title : '',
            renderHeader : (h, params) => {
              return h('div',[
                h('p',params.column.key),
                h('p',this.columentTitle(params.column.title))
              ])
            },
            render : (h, params) => {
             return this.renderItem(h,params,params.row.FRI);
            }
          },
          {
            key: 'SAT',
            title : '',
            renderHeader : (h, params) => {
              return h('div',[
                h('p',params.column.key),
                h('p',this.columentTitle(params.column.title))
              ])
            },
            render : (h, params) => {
              return this.renderItem(h,params,params.row.SAT);
            }
          },
          {
            key: 'SUN',
            title : '',
            renderHeader : (h, params) => {
              return h('div',[
                h('p',params.column.key),
                h('p',this.columentTitle(params.column.title))
              ])
            },
            render : (h, params) => {
              return this.renderItem(h,params,params.row.SUN);
            }
          },
        ],
        scheduleData:[], //月课表（全部数据）
        scheduleDataList:[], //处理后月课表
        scheduleUrl:this.$store.state.courseSchedule,
      }
    },
    beforeMount () {

    },
    mounted () {
      this.timeSet();
      let ele = this.$refs.scheduleTableDetail.children[0];
      this.$emit('childDom',ele);
    },
    created: function () {
    },
    methods: {
      timeSet () {  //获取服务器时间
        timestamp().then( data =>{
          this.year = data.year;
          this.month = data.month;
          this.weekIndex = data.week-1;
          this.getSchedule(true);
        }).catch(() => { //失败获取系统时间
          let newDate = new Date();
          this.year = newDate.getFullYear();
          this.month = newDate.getMonth() + 1;
          this.getSchedule(true);
        })
      },
      weekChange($index){ //改变周
        this.weekIndex = $index;
        let list = this.scheduleData[$index]; //本周课表
        this.scheduleDataList = [];
        for(let i = 0;i<list.length;i++) {
          this.scheduleColumns[i+1].title = list[i].courseDate;
          this.scheduleColumnsTamp[i+1].title = list[i].courseDate;
          this.timeList[i].list = list[i].courseScheduleList;
        }
        for(let i = 0;i<this.timeList.length;i++) {
          let scheduleList =  {
            NAME : this.timeList[i].time,
            MON : this.scheduleDataHandle(this.timeList[0].list,i),
            TUE : this.scheduleDataHandle(this.timeList[1].list,i),
            WED : this.scheduleDataHandle(this.timeList[2].list,i),
            THU : this.scheduleDataHandle(this.timeList[3].list,i),
            FRI : this.scheduleDataHandle(this.timeList[4].list,i),
            SAT : this.scheduleDataHandle(this.timeList[5].list,i),
            SUN : this.scheduleDataHandle(this.timeList[6].list,i),
          }
          this.scheduleDataList.push(scheduleList);
        }
      },
      scheduleDataHandle (data,index) {
        let item = [];
        for(let i = 0;i<data.length;i++){
          if(this.timeList[index].time.substring(0,2) == data[i].startTime.substring(0,2)){
            item.push(data[i]);
          }
        }
        return item;
      },
      datePrev () {  //上月
        this.month--;
        if(this.month < 1) {
          this.year--;
          this.month = 12;
        }
        this.getSchedule();
      },
      dateNext () {  //下月
        this.month++;
        if(this.month > 12) {
          this.year++;
          this.month = 1;
        }
        this.getSchedule();
      },
      getSchedule (first) {
        let year = this.year;
        let month = this.month < 10? '0' + this.month : this.month;
        this.date = year + '-' + month;
        this.$axios.get(this.scheduleUrl,{
          params:{
            dateTime:this.date,
          }
        }).then( res => {
          this.scheduleData = res.data.data;
          if (first) {
            this.weekChange(this.weekIndex);
          } else {
            this.weekChange(0);
          }
        })
      },
      columentTitle(title){  //处理表头
        return this.moment(title).format('ll').substring(5);
      },
      itemHeight (data) {  //处理课表标签高度
        let endTime = new Date(data.courseDate+' '+data.endTime).getTime();
        let startTime = new Date(data.courseDate+' '+data.startTime).getTime();
        let minute = (endTime-startTime)/1000/60;
        return minute*(46/60) + 'px';
      },
      itemTop (data,name) {  //处理课表标签定位
        let minute = data.startTime.substring(3,5)-name.substring(3, 5)
        return minute/60*46 + 'px';
      },
      renderItem(h,params,data) {  //render课表内容
        if(data!='' && data!=undefined) {
          let moudel = [];
          for(let i = 0;i<data.length;i++){
            let div =  h('div',{
              style : {
                height : this.itemHeight(data[i]),
                top : this.itemTop(data[i],params.row.NAME),
              },
              class : {
                yellow : data[i].courseType == '0'?true:false,
                item : true,
                open : parseInt(this.itemHeight(data[i])) <= 45,
              },
            },[
              h('div',[
                h('p',{class:{itemName:true}},data[i].studentName),
                h('p',[
                  h('span',data[i].startTime),
                  h('span','-'),
                  h('span',data[i].endTime),
                ]),
                h('em',data[i].subject.substring(0,1)),
              ])
            ])
            moudel.push(div);
          }
          let item = h('div',moudel);
          return item;
        }
      }
    },
    components:{

    }
  }
</script>


