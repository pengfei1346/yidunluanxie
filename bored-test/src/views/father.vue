<template>
  <!--<div>-->
    <!--<p>我是父亲, 对儿子说： {{sthGiveChild}}</p>-->
    <!--<br>-->
    <!--<br>-->
    <!--<children v-model="sthGiveChild"></children>-->
    <!--&lt;!&ndash;<children @returnBack="turnBack" :give="sthGiveChild"></children>&ndash;&gt;-->
  <!--</div>-->

  <div class="warp">
    <div class="btn" @click="isShow = !isShow">点我S</div>
    <transition name="slide-fade">
      <p v-if="isShow" style="height: 500px;background: red">hello</p>
    </transition>
  </div>
</template>

<script>
  import children from '@/components/children'

  export default {
    components: {
      children
    },
    data() {
      return {
        sthGiveChild:'给你一百块',
        isShow:true
      }
    },
    methods: {
      // turnBack(val) {
      //   this.sthGiveChild = val;
      // }
    }
  }
</script>

<style scoped lang="less">

  p{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .slide-fade-enter-active {
    transition: all .3s linear;
  }
  .slide-fade-leave-active {
    transition: all .8s revert;
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    /*transform: translateY(100px);*/
    opacity: 0;
  }
</style>
