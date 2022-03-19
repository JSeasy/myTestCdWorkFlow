import request from '@/request';

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/model',
    method: 'POST',
    data,
  });
};
// 删除
export const del = (data: any) => {
  return request({
    url: '/services/v1/model',
    method: 'DELETE',
    data,
  });
};
// 新增
export const add = (data: any) => {
  return request({
    url: '/services/v1/model/copy',
    method: 'POST',
    data,
  });
};

// 编辑
export const edit = (data: any) => {
  return request({
    url: '/services/v1/model',
    method: 'PUT',
    data,
  });
};

// 获取模板列表
export const getTemplate = () => {
  return request({
    url: '/services/v1/model/list/template',
    method: 'GET',
  });
};
