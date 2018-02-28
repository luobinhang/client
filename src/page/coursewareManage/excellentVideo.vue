<template>


</template>


<script>


  export default {
    name: 'app',
    data () {
      return {

      }
    },
    watch: {

    },
    mounted () {
      this.$axios.get("https://getaway.onlyeduhi.cn/tcrm/work/teacher/getAllSchool").then(res => {
        console.log(res)
      })
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
