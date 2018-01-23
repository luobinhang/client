<template>

  <div class="content">
    <div class="main">
      <div>
        <Button type="ghost" icon="refresh" class="refresh-btn" @click=" getCourseware()">刷新</Button>
      </div>
      <div>
        <ul class="courseware-list">
          <li v-for="(item,$index) in courseware" @click='active($index)' :class='{active: i==$index}'>
            {{ item.coursewareName }}
            <Button
              type="info"
              v-show="item.converStatus == 2"
              @click="coursewarePreview(item.coursewareUuid)"
              class="courseware-preview">
              预览</Button>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  const token = sessionStorage.getItem("token");
  export default {
    data () {
      return {
        deteleWindow:false,
        modal_loading: false,
        transitionShow: true,
        visible: false,
        courseware: '',
        coursewareUuid: "",
        i: '-1',
        token:token,
      }
    },
    mounted:function() {
      this.getCourseware();
    },
    methods: {
      active ($index) {
        this.i = $index;
      },
      getCourseware () {
        this.$axios.get(this.$store.state.getSysCoursewareList)
        .then( res => {
          this.courseware = res.data.data.list;
          const args = '{ "requesttype" : 15 ,"type" : "courseware"}';
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
      refresh(){
        this.getCourseware();
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
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ivu-modal{
    top: 0;
  }
</style>
