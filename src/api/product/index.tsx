import request from '@/request';

export const get = (data: any) => {
  return request({
    url: '/services/v1/model',
    method: 'POST',
    data,
  });
};
