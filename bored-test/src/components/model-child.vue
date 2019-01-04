<template>
  <div>
    <p>我是儿子： {{give.value}}</p>
    <br/>
    <p @click="returnBackFn">回应</p>
  </div>
</template>

<script>
  export default {
    name: "model-child",
    props: {
      give: ''
      // give: Object
    },
    model: {
      prop: 'give',
      event: 'back'
    },
    data: function () {
      return {
        reData:{
          title: '我是儿子',
          value: '不要,还你两百块'
        }
      }
    },
    methods: {
      returnBackFn: function () {
        // this.$emit('back', this.reData);
      }
    },
    watch:{
      give:function () {
        console.log(this.give);
      },
      immediate: true,
      deep: true
    }
  }
</script>

<style scoped>

</style>
