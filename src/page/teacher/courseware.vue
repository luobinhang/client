<template>

      <div class="content">
        <div class="main">
          <div class="courseware-btn">
            <Button type="ghost" icon="upload" class="upload-btn" @click="upload()">上传课件</Button>
            <Button type="ghost" icon="refresh" class="refresh-btn" @click="getCourseware()">刷新</Button>
          </div>
          <div>
            <ul class="courseware-list">
              <li v-for="(item,$index) in courseware" @click='active($index)' :class='{active: i==$index}'>
                {{ item.coursewareName }}
                <Button
                  type="error"
                  class="courseware-delete"
                  @click="coursewareDelete($index,item.coursewareUuid)"
                  :class="{ loadingBtn:item.converStatus != 2 }">
                  {{ deleteLabel($index) }}</Button>
                <Button
                  type="info"
                  v-show="item.converStatus == 2"
                  @click="coursewarePreview(item.coursewareUuid)"
                  class="courseware-preview">
                  预览</Button>
              </li>
            </ul>
            <Modal
              title="提示"
              v-model="deteleWindow"
              @on-ok="ok"
              class-name="vertical-center-modal">
              <p>是否删除课件</p>
            </Modal>
          </div>
          <div class="previewWarpper" v-show="previewShow">
            <div class="coursewareImgClose" @click="coursewareImgClose()"></div>
            <div class="previewContent" v-html="iframe"></div>
          </div>
        </div>
      </div>

</template>

<script>
  const token = sessionStorage.getItem("token");
  let websocket = null;
  export default {
    data () {
      return {
        deleteLabel: function($index){
          let status = this.courseware[$index].converStatus;
          if(status == 3){
            return "转码失败";
          } else if(status == 1){
            return "转码中";
          } else if(status == 2){
            return '删除'
          }
        },
        deteleWindow:false,
        courseware: '',
        coursewareUuid: "",
        i: '-1',
        arr:[],
        imgWarpper:false,
        coursewareImg:'',
        swiperMain:'',
        swiperContent:'',
        iframe:'',
        previewShow:false,
      }
    },
    mounted:function() {
      this.getCourseware();
    },
    methods: {
      sse () {
        const that = this;
        if(websocket){
          return false;
        }else{
          if ('WebSocket' in window) {
            websocket = new WebSocket(this.$store.state.socket + "?token=" + token);
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
      active ($index) {
        this.i = $index;
      },
      getCourseware () {
        const that = this;
        this.arr = [];
        this.$axios({
          method:"post",
          url: this.$store.state.getCoursewareListByJson,
        })
        .then( res => {
          this.courseware = res.data.data;
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
      coutsewareConver (uuid) {
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
      coursewareDelete ($index,uuid) {
        if(this.courseware[$index].converStatus == 2){
          this.coursewareUuid = uuid;
          this.deleteIndex = $index;
          this.deteleWindow = true;
        }
      },
      ok () {
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
      coursewarePreview(uuid){
        this.iframe = '';
        this.previewShow = true;
        this.iframe = '<iframe src="../../static/preview.html?token=' + token + '&uuid=' + uuid + '" id="iframe" width="100%" height="100%" frameborder="no" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" allowfullscreen="true"></iframe>';
      },
      coursewareImgClose () {
        this.iframe = '';
        this.previewShow = false;
      },
      upload () {
        this.sse();
        let args = '{"requesttype":12,"jscallback" : "callbackfn","messageid" :"0","data" : {}}';
        sendData(args);
      },
    },

  }
</script>
<style>
  @import '../../style/common.css';
</style>
<style scoped>
  .main{
    font-size: 14px;
  }
  .main .upload-btn{
    background: #f42440;
    width: 100px;
    color: #fff;
    border:0;
  }
  .refresh-btn{
    width: 100px;
    margin-left: 20px;
  }
  .ivu-upload{
    display: inline-block;
  }
  .courseware-list{
    border:1px solid #DDDDDD;
    border-radius: 4px;
    margin-top: 25px;
  }
  .courseware-list li{
    height: 40px;
    line-height: 40px;
    padding-left: 40px;
  }
  .courseware-list li:hover,.courseware-list li.active{
    background: #ebf7ff !important;
  }
  .courseware-list li:nth-of-type(odd){
    background: #f6f6f6;
  }
  .courseware-delete{
    float: right;
    line-height: 1;
    border-radius: 4px;
    padding: 5px 15px;
    background: #F42440;
    color: #fff;
    margin-right:20px;
    margin-top: 8px;
  }
  .courseware-delete.loadingBtn{
    background: #999;
    border-color: #999;
  }
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ivu-modal{
    top: 0;
  }
  .main .courseware-preview{
    float: right;
    line-height: 1;
    border-radius: 4px;
    padding: 5px 15px;
    color: #fff;
    margin-right: 10px;
    margin-top: 8px;
  }
  .previewWarpper{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 22;
    left: 0;
    top:0;
  }
  .previewContent{
    width: 100%;
    height: 100%;
  }
</style>
<style>
  .coursewareImgClose{
    position: absolute;
    right: 5px;
    top: 5px;
    width: 40px;
    height: 40px;
    background: url("../../../static/images/close-circled.png") no-repeat center;
    background-size: cover;
    z-index: 22;
    cursor: pointer;
  }

</style>
