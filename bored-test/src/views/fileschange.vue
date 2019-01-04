<template>
  <div>
    1111111111
  </div>
</template>

<script>
  export default {
    name: "fileschange",
    data() {
      return {}
    },
    methods: {
      files() {
        // 实现文件写入操作
        // 加载文件操作模块：fs模块
        var fs = require('fs');

        var msg = "Hello World!您好 世界！";
        // 调用fs.writeFile()进行文件写入,这是一个异步操作
        fs.writeFile('./hello.txt', msg, 'utf8', function (err) {
          // 在这个回调函数中只有一个参数，那就是err
          // 如果 err === null，表示文件写入成功，没有错误
          // 如果err不等于null，就表示文件写入失败了
          if (err) {
            console.log('文件写入错误，错误是：' + err);
          } else {
            console.log('ok');
          }
        });

      }
    },
    mounted() {
      this.files()
    }
  }
</script>

<style scoped>

</style>
