<template>
  <div class="nav-left">
    <!--<Menu theme="light" :active-name="activeName" width="199px" accordion>-->
      <!--<MenuItem name="首页" class="sy">-->
        <!--<router-link to="/home">首页</router-link>-->
      <!--</MenuItem>-->
      <!--<Submenu name="2" class="wdkc">-->
        <!--<template slot="title"><span>我的课程</span></template>-->
        <!--<MenuItem name="教师待上课程">-->
          <!--<router-link to="/teacher/courseWait">待上课程</router-link>-->
        <!--</MenuItem>-->
        <!--<MenuItem name="教师课程记录">-->
          <!--<router-link to="/teacher/courseRecord">课程记录</router-link>-->
        <!--</MenuItem>-->
      <!--</Submenu>-->
      <!--<Submenu name="4" class="kjwd">-->
        <!--<template slot="title"><span>课件文档</span></template>-->
        <!--<MenuItem name="我的课件">-->
          <!--<router-link to="/teacher/courseware">-->
            <!--<label>我的课件</label>-->
          <!--</router-link>-->
        <!--</MenuItem>-->
        <!--<MenuItem name="系统课件">-->
          <!--<router-link to="/teacher/systemCourseware">系统课件</router-link>-->
        <!--</MenuItem>-->
      <!--</Submenu>-->
      <!--<Submenu name="6" class="grzx">-->
        <!--<template slot="title"><span>个人中心</span></template>-->
        <!--<MenuItem name="修改密码">-->
          <!--<router-link to="/changePassword">重置密码</router-link>-->
        <!--</MenuItem>-->
      <!--</Submenu>-->
      <!--<li class="sbcs ivu-menu-item">-->
        <!--<a href="javascript:;" @click="device()">设备测试</a>-->
      <!--</li>-->
    <!--</Menu>-->
    <div class="nav-left-main">
      <ul>
        <li style="display: none">
          <Tooltip placement="bottom-end" content="信息" :delay="300">
            <a href="javascript:;"></a>
          </Tooltip>
        </li>
        <li>
          <Tooltip placement="bottom-end" content="信息" :delay="300">
            <a href="javascript:;"></a>
          </Tooltip>
        </li>
        <li>
          <Tooltip placement="top-end" content="信息" :delay="300">
            <a href="javascript:;"></a>
          </Tooltip>
        </li>
        <li>
          <Tooltip placement="top-end" content="信息" :delay="300">
            <a href="javascript:;"></a>
          </Tooltip>
        </li>
        <li>
          <Tooltip placement="top-end" content="信息" :delay="300">
            <a href="javascript:;"></a>
          </Tooltip>
        </li>
        <li>
          <Tooltip placement="top-end" content="信息" :delay="300">
            <a href="javascript:;"></a>
          </Tooltip>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  const token = sessionStorage.getItem('token');
  export default {
    data () {
      return {
        activeName:'',
        testNum:0,
        deviceNum:0,
      }
    },
    beforeMount () {
      this.routerStart();
    },
    mounted () {

    },
    methods: {
      //学习力测评
      test () {
        this.testNum++;
        let args = '{' +
            '"requesttype":9,' +
            '"messageid":'+ this.testNum +',' +
            '"jscallback" : "callbackTest",' +
            '"data" : {' +
                '"url" :"http://frontendtest.haiketang.net/static/client_test/test_sign.html?token='+ token +'"' +
            '}'+
          '}';
        sendData(args);
      },
      device () {  //设备测试
        this.deviceNum++;
        let args = '{' +
            '"requesttype":11,' +
            '"messageid":'+ this.deviceNum +',' +
            '"jscallback" : "callbackDevice",' +
            '"data" : {' +
              '"reserve" :""' +
            '}'+
          '}';
        sendData(args);
      },
      routerStart () {  //刷新页面后保持菜单栏状态
        this.activeName = this.$route.name;
      },
    },
  }
</script>

