<template>
  <div>
    <p>我是儿子，父亲对我说： {{give}}</p>
    <br>
    <p @click="returnBackFn">回应</p>
  </div>
</template>

<script>
  export default {
    props: {
      give: String
    },
    model: {
      prop: 'give',
      event: 'returnBack'
    },
    data() {
      return {}
    },
    methods: {
      returnBackFn() {
        this.$emit('returnBack', '还你200块');
        deep:true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
