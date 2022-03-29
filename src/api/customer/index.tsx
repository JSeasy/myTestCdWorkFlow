import request from '@/request';

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/org/khd/query',
    method: 'POST',
    data,
  });
};

export const del = (data: any) => {
  return request({
    url: '/services/v1/org',
    method: 'DELETE',
    data,
  });
};

export const add = (data: any) => {
  return request({
    url: '/services/v1/org/khd/saveQy',
    method: 'POST',
    data,
  });
};
