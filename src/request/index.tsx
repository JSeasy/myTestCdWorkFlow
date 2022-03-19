import axios, { AxiosError } from 'axios';
import { message } from 'antd';
axios.interceptors.request.use((config) => {
  config.headers['x-auth-token'] = window.localStorage.getItem('token');
  return config;
});
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const { data }: any = response;
      if (data.success || response.config.responseType === 'blob') {
        return data;
      } else {
        message.error(data.msg);
        if (data.code === '603') {
          window.localStorage.setItem('token', '');
        }
        return Promise.reject(data);
      }
    }
  },
  (err: AxiosError) => {
    const {
      response: { data },
    }: any = err;
    message.error(data.message);
    return Promise.reject(err);
  },
);

export default axios;
