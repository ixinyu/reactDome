import axios from 'axios'
import {getToken,clearToken} from './auth'
import { message } from 'antd';
const baseUrl = 'http://localhost:5000/'
const instance = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 15000 // 请求超时时间
})

//全局请求拦截
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  // config.headers['token'] = getToken()
  config.headers = {
    // 'Content-Type':'multipart/form-data',
    'token':getToken()
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

//全局相应拦截
instance.interceptors.response.use(function (response) {
  if (response.data.code === -1) {
    message.error(response.data.msg);
    return false
  }
  if (response.data.code === -2) {
    message.error(response.data.msg);
    clearToken()
    // localStorage.removeItem('token') 
    window.location.href = 'http://localhost:3000/'
   
  }

  return response.data
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export function get(url,params) {
  return instance.get(url,{
    params
  })
}

export function post(url,data) {
  return instance.post(url,data)
}

export function put(url,data) {
  return instance.put(url,data)
}

export function del(url) {
  return instance.delete(url)
}