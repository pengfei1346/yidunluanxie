<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <div @click="jump">
      name
    </div>
    <router-link to="/children">
      点击跳转
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {}
    },
    methods: {
      init() {
        this.$axios.post('')
          .then(res => {

          })
          .catch(err => {

          })
      },
      jump() {
        this.$router.push({
            name:'children',
            params:{
              msg:'我是从首页来的',
            },
          })
      }
    },
    mounted() {
      this.init()
      console.log(this.$axios);
    }
  }
</script>

<style scoped>

</style>
