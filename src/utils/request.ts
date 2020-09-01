import axios from 'axios';

// eslint-disable-next-line
const service: any = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
service.interceptors.request.use(
  (config: {headers: {uid: string}}) => {
    // eslint-disable-next-line
    config.headers.uid = '111';
    return config;
  },
  // eslint-disable-next-line
  (error: any) => {
    return Promise.reject(error);
  },
);
service.interceptors.response.use(
  (roesponse: {data: {code: number; message: string}}) => {
    const res = roesponse.data;
    if (res.code !== 200) {
      console.log('error', res.message);
      return Promise.reject(new Error(res.message || 'Error'));
    }
    return roesponse;
  },
  (error: {message: string}) => {
    console.log('error', error.message);
    return Promise.reject(new Error('error'));
  },
);
export default service;
