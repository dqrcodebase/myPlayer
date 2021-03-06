import axios from 'axios';
import ElementUI from 'element-ui';
import Vue from 'vue';

Vue.use(ElementUI, {
  size: 'small'
});
const service = axios.create({
  // process.env.NODE_ENV === 'development' 来判断是否开发环境
  timeout: 5000
});
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject();
  }
);

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data;
    }else{
      Promise.reject();
    } 
  },
  error => {
    console.log(error);
    return Promise.reject();
  }
);

export default service;
