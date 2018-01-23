  <template>
    <div class="content">
      <div class="class-warpper" v-if="show">
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
        <!-- 待上课列表 -->
        <div class="class-list">
          <ul>
            <li class="clear" v-for="(item,$index) in courseWait">
              <div class="class-img">
                <div class="class-img-bg"></div>
              </div>
              <div class="class-content">
                <p>科目 ： {{ item.subject }}
                  <span class='cpk' v-if="item.courseType==0">测评课</span>
                  <span class='zsk' v-else-if="item.courseType==1">正式课</span>
                  <span class='tsk' v-else-if="item.courseType==2">调试课</span>
                </p>
                <p v-if="less">学生 ： {{ item.studentName }}</p>
                <p v-else>学生 ：<span v-for="student in item.studentList">{{ student.studentName }}、</span></p>
                <p>课程时间 ： {{ item.courseDate }} {{ item.startTime }} - {{ item.endTime }}</p>
                <button
                  @click="start($index,item.courseUuid)">
                  进入教室</button>
              </div>
            </li>
          </ul>
          <div class="page-main">
            <Page :total="pageTotal" show-elevator @on-change="changePage"></Page>
          </div>
        </div>
      </div>
      <!-- 没有待上课列表显示区域 -->
      <div class="main" v-else>
        <div class="null-class">
          <div>
            <div class="null-img">
              <img src="../../assets/images/null.png" alt="null">
            </div>
            <p>暂时没有待上课程</p>
            <p>您可以拨打电话 <span>400-876-3300</span> 或登录<a href="javascript:;" @click="target()">嗨课堂官网</a>进行咨询预约课程</p>
            <button><a href="javascript:;" @click="target()">马上去选课</a></button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        i:0,
        courseWait:"",
        pageNo:1,
        pageTotal:'',
        show:false,
        less:true,
        classTab:this.$store.state.classTab
      }
    },
    mounted:function() {
      this.getCourseWait();
    },
    methods: {
      tab ($index) {
        this.i = $index;
        this.getCourseWait();
      },
      getCourseWait () {  //判断用户角色和上课类型
        if (this.i == 0) { //教师一对一
          this.getCourseListGet(this.$store.state.teacherCourseV1List);
          this.less = true;
        }else if(this.i == 1){ //教师一对多
          this.getCourseListGet (this.$store.state.teacherCourseList);
          this.less = false;
        }
      },
      getCourseListGet (url) {  //获取待上课列表
        this.$axios.get(url,{
          params : {
            'pageNo' : this.pageNo,
          },
        })
        .then( res => {
          this.courseWait = res.data.data.list;
          this.pageTotal = res.data.data.total;
          if(this.courseWait.length != 0){
            this.show = true;
          }else{
            this.show = false;
          }
          const args = '{ "requesttype" : 15 ,"type" : "course"}';
          sendData(args);
        })
      },
      changePage (pageIndex) {  //改变pages
        this.pageNo = pageIndex;
        this.getCourseWait();
      },
      start ($index,uuid) {  //进入房间
        this.$axios({
          method:"post",
          url: this.$store.state.getCourseRoom,
          data : {
            'courseUuid' : uuid,
          },
        })
        .then( res => {
          let data = res.data.data;
          let args = '{ "requesttype" : 2,' +
                        '"messageid" : '+ $index +',' +
                        '"jscallback" : "coursewareClassback",' +
                        '"data" : { ' +
                            '"commchannelid" : "'+ data.commChannelId +'",' +
                            '"signallingchannelid" : "'+ data.signallingChannelId +'",' +
                            '"recordId" : "'+ data.recordId +'",' +
                            '"courseType" : "'+ data.courseType +'",' +
                            '"courseUuid" : "'+ uuid +'",' +
                            '"tabId" : "'+ this.i +'"' +
                        '}' +
                      '}';
          sendData(args);
        })
      },
      target(){
        let args = '{ "requesttype" : 13,' +
          '"url" : "www.onlyhi.cn"' +
          '}';
        sendData(args);
      },
    },
  }
</script>

<style scoped>
  @import '../../style/courseWait.less';

</style>
