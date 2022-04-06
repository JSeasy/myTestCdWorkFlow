import request from '@/request';

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/log/query',
    method: 'POST',
    data,
  });
};
