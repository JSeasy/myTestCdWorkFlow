import axios from 'axios';
axios.interceptors.request.use((config) => {
  config.headers['x-auth-token'] = window.localStorage.getItem('token');
  console.log(config.headers);
  return config;
});
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const { data }: any = response;
      if (data.success || response.config.responseType === 'blob') {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default axios;
