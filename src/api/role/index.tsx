import request from '@/request';

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/role/query',
    method: 'POST',
    data,
  });
};
