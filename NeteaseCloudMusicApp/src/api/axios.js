import axios from "axios";

//拦截器
axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
//设置默认请求路径
axios.defaults.baseURL = "https://netease-cloud-music-api-blush-xi.vercel.app";

export default axios