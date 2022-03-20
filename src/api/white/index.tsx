import request from '@/request';

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/datalist',
    method: 'POST',
    data,
  });
};

// 删除
export const del = (data: any) => {
  return request({
    url: '/services/v1/datalist',
    method: 'DELETE',
    data,
  });
};

// 新增
export const add = (data: any) => {
  return request({
    url: '/services/v1/datalist',
    method: 'PUT',
    data,
  });
};

// 获取单行
export const getRow = (id: any) => {
  return request({
    url: '/services/v1/datalistmeta/list/' + id,
    method: 'GET',
  });
};

// 保存

export const save = (data: any) => {
  return request({
    url: '/services/v1/datalistmeta',
    method: 'PUT',
    data,
  });
};
