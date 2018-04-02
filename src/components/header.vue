<template>
  <div class="header">
    <div class="header-main">
      <div class="header-logo">
        <img src="../assets/teacher/logo.png">
      </div>
      <div class="header-nav" ref="headerNav">
        <div class="header-nav-item" :class="{ active:rn == 'home' }">
          <router-link to="/home">首页</router-link>
        </div>
        <div class="header-nav-item" :class="{ active:rn == 'courseManage' }">
          <p>课程管理<i></i></p>
          <ul>
            <li>
              <router-link to="/courseManage/courseWait">待上课程</router-link>
            </li>
            <li>
              <router-link to="/courseManage/freeTime">空闲时间</router-link>
            </li>
            <li>
              <router-link to="/courseManage/mySchedule">我的课表</router-link>
            </li>
            <li>
              <router-link to="/courseManage/courseRecord">课程记录</router-link>
            </li>
          </ul>
        </div>
        <div class="header-nav-item"  :class="{ active:rn == 'coursewareManage' }">
          <p>课件管理 <i></i></p>
          <ul>
            <li>
              <router-link to="/coursewareManage/myCourseware">我的课件</router-link>
            </li>
            <li>
              <router-link to="/coursewareManage/systemCourseware">系统课件</router-link>
            </li>
            <li>
              <router-link to="/coursewareManage/excellentVideo">优秀视频</router-link>
            </li>
          </ul>
        </div>
        <div class="header-nav-item" :class="{ active:rn == 'personal' }">
          <p>个人中心 <i></i></p>
          <ul>
            <li>
              <router-link to="/personal/info">个人信息</router-link>
            </li>
            <li>
              <router-link to="/personal/salary">薪资结算</router-link>
            </li>
            <li>
              <router-link to="/personal/cooperation">合作协议</router-link>
            </li>
            <li>
              <router-link to="/personal/internship">实习证明</router-link>
            </li>
            <li>
              <router-link to="/personal/HBapplication">手写板申请</router-link>
            </li>
            <li>
              <router-link to="/personal/info"><span @click="changePsw">修改密码</span></router-link>
            </li>
            <li>
              <a href="javascript:;" @click="signOut">退出登录</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 退出 -->
    <Modal v-model="tipWindow" width="320" class="sign-out">
      <p slot="header">
        <span>退出提醒</span>
      </p>
      <p slot="close">
        <img src="../assets/images/close2.png" alt="关闭">
      </p>
      <div class="tipWindow">
        <p>确定退出登录吗？</p>
      </div>
      <div slot="footer">
        <Button type="primary" @click="tipWindow = false">取消</Button>
        <Button type="primary" @click="signOutBtn">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        helpMain:this.$store.state.helpMain,
        helpIndex:0,
        helpShow:false,
        offsetTop :0,
        tipWindow: false,
      }
    },
    props:['rn'],
    mounted () {

    },
    methods: {
      signOut () {  //退出登录
        let args = '{' +
          '"requesttype":10,' +
          '"messageid":'+ 0 +',' +
            '"jscallback" : "signOut",' +
            '"data" : {' +
              '"msgbox" :'+ true +'' +
            '}'+
          '}';
        sendData(args);
      },
      feedback(){ //意见反馈
        let args = '{' +
          '"requesttype":16,' +
          '"messageid":'+ 0 +',' +
          '"jscallback" : "feedback"' +
          '}';
        sendData(args);
      },
      support(){ //远程协助
        let args = '{' +
          '"requesttype":18' +
          '}';
        sendData(args);
      },
      help () { //用户帮助
        this.helpShow = true;
      },
      helpClose () {
        this.helpShow = false;
      },
      helpSelect (index){
        this.offsetTop = this.$refs.helpQuestion[index].offsetTop - 60;
        this.helpIndex = index;
        this.$refs.helpArrow.style.top = this.offsetTop + 'px';
      },
      changePsw(){
        this.$store.commit("CHANGE_PASSWORD","true");
      },
      signOut () {
        this.tipWindow = true;
      },
      signOutBtn () {
        let args = '{' +
          '"requesttype":10' +
          '}';
        sendData(args);
      }
    },
  }
</script>
<style lang="less">
  .sign-out .tipWindow{
    padding: 20px 0;
    text-align: center;
  }
  .sign-out button{
    margin: 0 15px !important;
    width: 100px !important;
  }
</style>
