import axios from 'axios';
import Vue from 'vue';
import router from '../router/index'

var xhr = axios.create({
  baseURL: '',
  timeout:5000
});

//请求拦截器
xhr.interceptors.request.use(config => {
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

var $axios = {
  get (url, data, config) {
    return new Promise((resolve, reject) => {
      xhr.get( url, {params: data}, config).then(res => {
        resolve(res.data)
      }).catch (err => {
        reject(err)
      })
    })
  },

  post(url, data, config, method = 'post'){
    return new Promise((resolve,reject)=>{
      xhr[method](url, data, config).then(res=>{
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },

  put (url, data, config) {
    return this.post(url, data, config, 'put')
  },
  delete (url, data, config) {
    return this.post(url, data, config, 'delete')
  }

}

Vue.prototype.$axios = $axios;
