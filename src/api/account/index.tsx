import request from '@/request';

// 获取预处理字段
export const getPrehandleFields = (id: any) => {
  return request({
    url: '/services/v1/abstraction/datacolumns/' + id,
    method: 'GET',
  });
};

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/abstraction',
    method: 'POST',
    data,
  });
};

// 删除
export const del = (data: any) => {
  return request({
    url: '/services/v1/abstraction',
    method: 'delete',
    data,
  });
};

// 新增修改
export const save = (data: any) => {
  return request({
    url: '/services/v1/abstraction',
    method: 'PUT',
    data,
  });
};
