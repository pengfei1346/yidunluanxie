<template>
    <div>
      我是儿子


      <div @click="" v-tran>
        1111111111
      </div>

    </div>
</template>

<script>
    export default {
      name: "children",
      data() {
          return{
            fillData: [
              {
                name:'',
                value:''
              }
            ]
          }
      },
      methods:{
        init() {

        }
      },
      created() {
        console.log(this.$route);
      },
      directives: {

      }
    }
</script>

<style scoped>

</style>
