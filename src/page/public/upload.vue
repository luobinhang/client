<template>
  <div class="uploadMian">
    <div class="upload">
      <ul class="tabUl clear">
        <li v-for="(item,$index) in tabList"
            @click="tab($index)"
            :class='{active: i==$index}'>
          <p>{{ item.title }}</p>
        </li>
      </ul>
      <div class="tableView" v-if="i == 0">
        <Table highlight-row :columns="columns1" :data="courseware1" class="tableUpload"></Table>
        <Button type="ghost" icon="upload" class="upload-btn" @click="upload()">上传新文件</Button>
        <p>支持PDF和DOC格式，兼容部分PPT</p>
      </div>
      <div class="tableView" v-else-if="i == 1">
        <Table :columns="columns2" :data="courseware2" class="tableUpload"></Table>
      </div>
      <Modal
        title="提示"
        v-model="deteleWindow"
        @on-ok="ok"
        class-name="vertical-center-modal">
        <p>是否删除课件</p>
      </Modal>
    </div>
  </div>
</template>
<script>
  const token = sessionStorage.getItem('token')
  let websocket = null;
  export default {
    data () {
      return {
        t:this,
        deteleWindow:false, //删除窗口
        coursewareUuid: "", //课件id
        deleteIndex : '', //删除课件下标
        token : '', //token
        i : "0", //tab下标
        tabList : [ //tab切换栏
          {
            title : "我的课件",
          },
          {
            title : "系统课件",
          },
        ],
        columns1: [  //我的课件按键导航栏
          {
            title: '课件名称',
            key: 'coursewareName',
            width: '370',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'document'
                  },
                  style: {
                    marginRight: '5px',
                    fontSize: '20px',
                  },
                }),
                h('strong', params.row.coursewareName)
              ]);
            }
          },
          {
            title: '页数',
            key: 'pageNum',
            width: '130'
          },
          {
            title: '操作',
            key: 'action',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px',
                      background: this.courseware1[params.index].converStatus == 2?'#EC808F':'#999',
                      borderColor: this.courseware1[params.index].converStatus == 2?'#EC808F':'#999',
                    },
                    on: {
                      click: () => {
                        this.open(params.index,params);
                      }
                    }
                  },
                  (function (t) {
                    let status = t.courseware1[params.index].converStatus;
                    let text = '';
                    if(status == 3){
                      text = "转码失败";
                    } else if(status == 1){
                      text = "转码中";
                    } else if(status == 2){
                      text = '打开'
                    }
                    return text;
                  })(this.t)
                ),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small',
                  },
                  style: {
                    display : this.courseware1[params.index].converStatus == 1?'none':'inlineBlock',
                  },
                  on: {
                    click: () => {
                      this.coursewareDelete(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        columns2: [ //系统课件按键导航栏
          {
            title: '课件名称',
            key: 'originalName',
            width: '400',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'document'
                  },
                  style: {
                    marginRight: '5px',
                    fontSize: '20px',
                  },
                }),
                h('strong', params.row.coursewareName)
              ]);
            }
          },
          {
            title: '页数',
            key: 'pageNum',
            width: '150'
          },
          {
            title: '操作',
            key: 'action',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px',
                    background: '#EC808F',
                    borderColor: '#EC808F',
                  },
                  on: {
                    click: () => {
                      this.open(params.index)
                    }
                  }
                }, '打开'),
              ]);
            }
          }
        ],
        courseware1: [], //我的课件列表
        courseware2: [], //系统课件列表
        loading:'打开', //课件状态
        arr:[], //课件完成数
      }
    },
    mounted () {
      const that = this;
      var temp = 0;
      var getToken = setInterval(function(){
        that.token = sessionStorage.getItem("token");
        temp++;
        if(that.token != null || that.token !=''|| temp > 20){
          clearInterval(getToken)
          that.getCourseware();
        }
      },300);

    },
    methods: {
      sse () {
        const that = this;
        if(websocket){
          return false;
        }else{
          if ('WebSocket' in window) {
            websocket = new WebSocket(this.$store.state.socket + "?token=" + token);//正式环境
            console.log('WebSocket开始连接')
          }
          else {
            this.$Notice.error({
              title: '当前浏览器不支持websocket长连接',
              desc: '',
              duration:2,
            });
          }
          //连接发生错误的回调方法
          websocket.onerror = function () {
            console.log('WebSocket连接发生错误');
          };
          //连接成功建立的回调方法
          websocket.onopen = function (event) {
            console.log('WebSocket连接成功');
          }
          //接收到消息的回调方法
          websocket.onmessage = function (event) {
            if(event.data!=''){
              that.getCourseware();
            }
          }
          //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
          window.onbeforeunload = function () {
            websocket.close();
          }
        }
      },
      open (index) { //调用c++接口打开课件
        let status = this.courseware1[index].converStatus;
        if( status == 2 ) {
          let coursewareUuid = this.courseware1[index].coursewareUuid;
          let args = '{' +
            '"requesttype":8,' +
            '"messageid":'+ index +',' +
            '"jscallback" : "callbackfn",' +
            '"data" : {' +
            '"courseid" :"'+ coursewareUuid +'",' +
            '"operatortype" : 0' +
            '}'+
            '}';
          sendData(args);
        }
      },
      tab ($index) { //1v1和1v多切换栏
        this.i = $index;
        if($index == 1){
          this.getSystemCourseware();
        }else{
          this.getCourseware();
        }
      },
      getCourseware () { //获取课件列表
        const that = this;
        this.arr = [];
        this.$axios({
          method:"post",
          url: this.$store.state.getCoursewareListByJson,
        })
          .then( res => {
            this.courseware1 = res.data.data;
            setTimeout(function(){that.$Message.destroy();},1000);
            for(var i = 0;i<res.data.data.length;i++){
              if(this.courseware[i].converStatus == 3){
                this.$Notice.error({
                  title: '课件自动转换失败',
                  desc: '请手动转换pdf格式再上传，或检查网络后重试！转换地址：' +
                  '<span onclick="copyText()" style="cursor: pointer">https://smallpdf.com/cn</span>' +
                  '<input id="copyText" type="text" value="https://smallpdf.com/cn" style="opacity: 0;position: absolute;z-index: -99;top: -9999px;">',
                  duration:0,
                });
              }else if(this.courseware[i].converStatus == 1){
                this.sse();
              }else if(this.courseware[i].converStatus == 2){
                this.arr.push(2);
              }
            };
            if(this.arr.length == res.data.data.length){
              this.arr = [];
              console.log('close');
              if(websocket) {
                websocket.close();
                websocket = null;
              }
            }
            const args = '{ "requesttype" : 15 ,"type" : "courseware"}';
            sendData(args);
          })
      },
      getSystemCourseware () {
        this.$axios.get(this.$store.state.getSysCoursewareList)
          .then( res => {
            this.courseware2 = res.data.data.list;
            const args = '{ "requesttype" : 15 ,"type" : "courseware"}';
            sendData(args);
          })
      },
      coutsewareConver (uuid) { //课件转换接口
        this.$axios({
          method:"post",
          url: this.$store.state.converByJson,
          data:{
            'coursewareUuid' : uuid
          }
        })
          .then( res => {
            this.$Message.success('转换成功');
            this.getCourseware();
          })
      },
      coursewareDelete (index) {  //打开删除窗口
        this.coursewareUuid = this.courseware1[index].coursewareUuid;
        this.deleteIndex = index;
        this.deteleWindow = true;
      },
      ok () {  //删除
        this.$axios({
          method:"post",
          url: this.$store.state.deleteCoursewareByJson,
          data:{
            'coursewareUuid' : this.coursewareUuid
          }
        })
          .then( res => {
            let args = '{' +
              '"messageid":'+ this.deleteIndex +',' +
              '"jscallback" : "callbackfn",' +
              '"courseid" :'+ this.coursewareUuid +', ' +
              '"operatortype" : 1' +
              '}';
            this.$Message.success('删除成功');
            this.getCourseware();
            sendData(args);
          })
      },
      upload () { //调用c++上传课件协议
        this.sse();
        let args = '{"requesttype":12,"jscallback" : "callbackfn","messageid" :"0","data" : {}}';
        sendData(args);
      },
    },
  }
</script>
<style>
  .body{
    min-width: 690px;
    overflow-x: auto;
  }
  body, html, #app{
    overflow: visible;
  }
  .tableUpload .ivu-table td,.tableUpload .ivu-table th{
    height: 60px;
    padding-left: 20px;
    font-weight: normal;
  }
  .tableUpload .ivu-table th{
    background: #fff;
  }
  .tableUpload .ivu-table td strong{
    font-weight: normal;
  }
  .tableUpload .ivu-table th{
    font-size: 16px;
    height: 38px;
  }
  .tableUpload .ivu-table-body{
    height: 240px;
    overflow-x: hidden;
  }
  .tableUpload .ivu-table table{
    width: 100%;
  }
  .tableUpload .ivu-table{
    font-size: 14px;
    color: #666;
  }
  .tableUpload .ivu-upload{
    width: 100%;
  }
  .uploadMian .ivu-upload{
    display: block;
  }
  .ivu-spin-fix{
    position: fixed;
  }
</style>
<style scoped>
  .upload{
    width: 690px;
    background: #fff;
    padding-bottom: 50px;
  }
  .upload ul{
    border: 1px solid #D9D9D9;
  }
  .upload ul li{
    float: left;
    width: 50%;
    text-align: center;
    height: 38px;
    background: #F5F5F5;
    font-size: 16px;
    color: #070707;
    line-height: 38px;
    cursor: pointer;
  }
  .upload ul li.active{
    background: #EDECEC;
  }
  .upload ul li:nth-of-type(1){
    border-right: 1px solid #D9D9D9;
  }

  .uploadMian .upload-btn{
    color: #fff;
    width: 140px;
    height: 36px;
    background: #F42440;
    border-radius: 8px;
    font-size: 16px;
    display: block;
    margin: 50px auto 10px;
    border: none;
  }
  .tableView p{
    text-align: center;
  }
  .uploadMian{
    width: 690px;
  }

</style>
