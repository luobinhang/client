<template>
  <div id="app">
    <div class="warpper" v-if="uploadHide">
      <headerTop :rn="routerName"></headerTop>
      <div class="container">
        <navBar></navBar>
        <div class="section">
          <div class="content">
            <!--<transition name="slide-fade">-->
                <!--<router-view></router-view>-->
            <!--</transition>-->
            <transition :name="transitionName">
              <router-view></router-view>
            </transition>
            <loading v-if="fetchLoading == 'true'"></loading>
        </div>

        </div>
      </div>
    </div>
    <div class="uploadContent" v-else>
      <router-view></router-view>
      <loading v-if="fetchLoading == 'true'"></loading>
    </div>
  </div>

</template>


<script>
  import { mapGetters } from 'vuex';
  import headerTop from './components/header';
  import navBar from './components/nav';
  import loading from './components/loading';

export default {
  name: 'app',
  data () {
    return {
      uploadHide:true,
      routerName:'',
      transitionName: 'vux-pop-in',
      position:false,
    }
  },
  watch: {
    '$route' (to, from) {
      this.routerName = to.path.split('/')[1];
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'vux-pop-out' : 'vux-pop-in'
    }
  },
  mounted () {
    this.uploadShow ();
    this.headerNav();
  },
  computed:{
    ...mapGetters([
     'fetchLoading',
   ]),
  },
  methods : {
    uploadShow () {
      if (this.$route.fullPath === '/upload') {
        this.uploadHide = false;
      }
    },
    headerNav () {
      this.routerName = this.$route.path.split('/')[1];
    },
  },
  components:{
    headerTop,
    navBar,
    loading,
  },
}
</script>

<style lang="less">
  @import './style/common.less';
</style>
