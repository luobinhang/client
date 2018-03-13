<template>
  <div class="header">
    <div class="header-main">
      <!--<div class="logo">-->
        <!--<img src="../assets/images/logo.png" alt="logo">-->
      <!--</div>-->
      <!--<div class="user">-->
        <!--<span>欢迎您，{{ user }}</span>-->
        <!--<a href="javascript:;" class="user-help" @click="help()">用户帮助</a>-->
        <!--<a href="javascript:;" class="user-feedback" @click="feedback()">意见反馈</a>-->
        <!--<a href="javascript:;" class="user-support" @click="support()">远程协助</a>-->
        <!--<a href="javascript:;" @click="signOut()">退出登录</a>-->
      <!--</div>-->
      <!--<div class="help" v-show="helpShow">-->
        <!--<div class="help-content">-->
          <!--<div class="help-title">-->
            <!--<p>用户帮助</p>-->
            <!--<i @click="helpClose()"></i>-->
          <!--</div>-->
          <!--<div class="help-main clear">-->
            <!--<div class="help-question">-->
              <!--<ul>-->
                <!--<li v-for="(item,$index) in helpMain" ref="helpQuestion" @click="helpSelect($index)" :class="{ active : helpIndex == $index }"> {{ item.qusetion }}</li>-->
              <!--</ul>-->
            <!--</div>-->
            <!--<div class="help-answer">-->
              <!--<ul>-->
                <!--<li v-for="(item,$index) in helpMain" v-show="helpIndex == $index"> {{ item.answer }}</li>-->
              <!--</ul>-->
              <!--<i class="help-arrow" ref="helpArrow"></i>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
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
          </ul>
        </div>
      </div>
    </div>
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
      }
    },
    props:['rn'],
    mounted () {
    },
    watch: {
      '$route' (to, from) {
        this.routerName = to.path.split('/')[1];
      }
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
      }
    },
  }
</script>
<!--<style scoped lang="less">-->
  <!--.user{-->
    <!--position: absolute;-->
    <!--right: 68px;-->
    <!--color: #fff;-->
    <!--height: 90px;-->
    <!--line-height: 90px;-->
    <!--top: 0;-->
    <!--font-size: 14px;-->
    <!--a{-->
      <!--color: #fff;-->
      <!--margin-left: 10px;-->
    <!--}-->
  <!--}-->
  <!--.user a:hover{-->
    <!--text-decoration: underline;-->
  <!--}-->
  <!--.user-help{-->
    <!--margin: 0 5px 0 15px;-->
    <!--cursor: pointer;-->
  <!--}-->
  <!--.help{-->
    <!--position: fixed;-->
    <!--z-index: 15;-->
    <!--width: 100%;-->
    <!--background: rgba(0,0,0,0.8);-->
    <!--height: 100%;-->
    <!--left: 0;-->
    <!--top: 0;-->
    <!--.help-content{-->
      <!--position: absolute;-->
      <!--background: #fff;-->
      <!--left: 50%;-->
      <!--top: 50%;-->
      <!--width: 570px;-->
      <!-- -webkit-transform: translate(-50%,-50%);-->
      <!-- -moz-transform: translate(-50%,-50%);-->
      <!-- -ms-transform: translate(-50%,-50%);-->
      <!-- -o-transform: translate(-50%,-50%);-->
      <!--transform: translate(-50%,-50%);-->
      <!--border-radius: 4px;-->
      <!--overflow: hidden;-->
    <!--}-->
    <!--.help-title{-->
      <!--background: #F42440;-->
      <!--color: #fff;-->
      <!--padding-left: 20px;-->
      <!--font-size: 16px;-->
      <!--height: 40px;-->
      <!--line-height: 40px;-->
      <!--position: relative;-->
    <!--}-->
    <!--.help-title i{-->
      <!--position: absolute;-->
      <!--right: 20px;-->
      <!--top: 50%;-->
      <!--margin-top: -6px;-->
      <!--height: 12px;-->
      <!--width: 12px;-->
      <!--cursor: pointer;-->
      <!--background: url("../assets/images/close2.png") no-repeat center / 12px;-->
    <!--}-->
    <!--.help-main{-->
      <!--padding: 20px;-->
      <!--height: 400px;-->
      <!--.help-question{-->
        <!--float: left;-->
        <!--width: 180px;-->
        <!--height: 100%;-->
        <!--overflow-y: auto;-->
        <!--overflow-x: hidden;-->
        <!--font-size: 14px;-->
        <!--color: #8e96a5;-->
        <!--li{-->
          <!--line-height: 24px;-->
          <!--margin: 10px 0;-->
          <!--cursor: pointer;-->
          <!-- -webkit-transition-duration: .3s;-->
          <!-- -moz-transition-duration: .3s;-->
          <!-- -ms-transition-duration: .3s;-->
          <!-- -o-transition-duration: .3s;-->
          <!--transition-duration: .3s;-->
          <!--&.active,&:hover{-->
            <!--color: #F42440;-->
          <!--}-->
        <!--}-->
      <!--}-->
      <!--.help-answer{-->
        <!--float: right;-->
        <!--width: 330px;-->
        <!--height: 100%;-->
        <!--background: #f0f4f5;-->
        <!--padding: 20px;-->
        <!--border-radius: 8px;-->
        <!--color: #727a89;-->
        <!--font-size: 14px;-->
        <!--position: relative;-->
      <!--}-->
    <!--}-->
  <!--}-->
  <!--.help-arrow{-->
    <!--position: absolute;-->
    <!--border-right: 12px solid #f0f4f5;-->
    <!--border-top: 11px solid transparent;-->
    <!--border-bottom: 11px solid transparent;-->
    <!--left: -12px;-->
    <!--top: 10px;-->
  <!--}-->

<!--</style>-->
