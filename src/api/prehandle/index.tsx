import request from '@/request';

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/preitem',
    method: 'POST',
    data,
  });
};

// 获取列表
export const getPlugins = () => {
  return request({
    url: '/services/v1/common/plugins',
    method: 'GET',
  });
};

// 删除
export const del = (data: any) => {
  return request({
    url: '/services/v1/preitem',
    method: 'DELETE',
    data,
  });
};

// 添加
export const add = (data: any) => {
  return request({
    url: '/services/v1/preitem',
    method: 'PUT',
    data,
  });
};

// 获取原始字段
export const getOriginField = (id: string) => {
  return request({
    url: '/services/v1/field/list/' + id,
    method: 'GET',
  });
};
