<template>

  <div>
    <h1 v-for="item in a">{{item}}</h1>
  </div>
</template>


<script>


  export default {
    name: 'app',
    data () {
      return {
        a:new Array(3).fill(0),
      }
    },
    watch: {

      a: {
        handler(newValue, oldValue) {
          console.log(newValue, oldValue)
          for (let i = 0; i < newValue.length; i++) {
            if (oldValue[i] != newValue[i]) {
              console.log(newValue)
            }
          }
        },
        deep: true
      },
    },
    mounted () {
      for(let i = 0;i<this.a.length;i++){
        setInterval(() => {
          this.a[i]++;
          console.log(this.a)
        },1000)
      }
    },
    computed:{

    },
    methods : {

    },
    components:{

    },
  }
</script>

<style lang="less">
</style>
