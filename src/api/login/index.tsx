import request from '@/request';

export const login = (params: any) => {
  return request({
    url: '/services/v1/user/login',
    method: 'POST',
    params,
  });
};
