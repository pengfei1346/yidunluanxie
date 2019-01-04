<template>
  <div>
    <br/>
    <div>我是爸爸:{{fatherData}}</div>
    <br/>
    <br/>
    <!--<my-header @returnback="turnBack" :give="sthGiveChild"></my-header>-->
    <my-header v-model="subData.sthGiveChild"/>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import MyHeader from '@/components/model-child'
  export default {
    name: "model-father",
    components: {
      MyHeader
    },
    data() {
      return{
        fatherData:'给你一百块',
        subData:{
          sthGiveChild:{
            title: '我是爸爸',
            value: ''
          }
        }
      }
    },
    methods:{
      ...mapActions({ setUserInfo: "setUserInfo" }),
      getInfo() {
        this.$store.dispatch("setLoadingState", true);

      }
    }
  }
</script>

<style scoped>

</style>
