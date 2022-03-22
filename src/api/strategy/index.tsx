import request from '@/request';

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/activation',
    method: 'POST',
    data,
  });
};

// 保存
export const save = (data: any) => {
  return request({
    url: '/services/v1/activation',
    method: 'PUT',
    data,
  });
};

// 删除
export const del = (data: any) => {
  return request({
    url: '/services/v1/activation',
    method: 'DELETE',
    data,
  });
};
