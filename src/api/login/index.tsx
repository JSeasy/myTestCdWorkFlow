import request from '@/request';

export const login = (params: any) => {
  return request({
    url: '/services/v1/user/login',
    method: 'POST',
    params,
  });
};

export const getCode = () => {
  return request({
    url: '/services/v1/common/getCaptcha',
    method: 'GET',
    responseType: 'blob',
  });
};

export const regist = (params: any) => {
  return request({
    url: '/services/v1/user/regist',
    method: 'POST',
    params,
  });
};

export const getRouters = () => {
  return request({
    url: '/services/v1/getRouters',
    method: 'GET',
  });
};
