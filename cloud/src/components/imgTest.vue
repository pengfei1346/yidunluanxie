<template>
  <div class="container">
    <label id="btn-wrap">
      <input type="file" name="file" id="file-input"
             accept="image/jpeg,image/png" @change="up">
      <img :src="img" v-if="img">
      <img src="../assets/123.png" v-if="!img">
    </label>
  </div>

</template>

<script>
  import axios from 'axios'

  export default {
    props:{
      value: {
        type: String,
      }
    },
    data() {
      return {
        token: '',
        img: "",
        userId: '',
      }
    },
    methods: {
      up($event) {
        var file = $event.target.files[0];
        var form = new FormData();
        form.append("file", file);
        form.append("token", this.token);
        axios.post("https://upload-z1.qiniup.com", form, {
          headers: {"Content-Type": "multipart/form-data"}
        }).then(res => {
          // console.log(res.data.url);
          this.img = res.data.url;
        })
      },
      getToken() {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          this.token = res.data.data;
        })
      },
    },
    watch: {
      img() {
        this.$emit('getImg', this.img)
      },
      value(val) {
        this.img = val
      }
    },
    mounted() {
      this.getToken();
    }
  }
</script>

<style scoped>
  .container {
    width: 400px;
  }

  .item-img {
    text-align: center;
  }

  #file-input {
    display: none;
  }

  #btn-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 4px;
    border: 1px dashed #bbb;
    margin: 10px auto;
  }

  #btn-wrap img {
    z-index: 998;
    height: 80px;
    width: 80px;
  }

  .icon-jiahao {
    font-size: 60px;
    color: #fff;
  }
</style>
