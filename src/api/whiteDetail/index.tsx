import request from '@/request';

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/datalistrecord',
    method: 'POST',
    data,
  });
};

// 删除
export const del = (data: any) => {
  return request({
    url: '/services/v1/datalistrecord',
    method: 'DELETE',
    data,
  });
};

// 新增modal动态字段

export const getDynamicFields = (id: any) => {
  return request({
    url: '/services/v1/datalistmeta/list/' + id,
    method: 'GET',
  });
};

export const add = (data: any) => {
  return request({
    url: '/services/v1/datalistrecord',
    method: 'PUT',
    data,
  });
};
