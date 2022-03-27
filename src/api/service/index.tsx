import request from '@/request';

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/fworg/query',
    method: 'POST',
    data,
  });
};

export const add = (data: any) => {
  return request({
    url: '/services/v1/fworg/save',
    method: 'POST',
    data,
  });
};

export const edit = (data: any) => {
  return request({
    url: '/services/v1/fworg/edit',
    method: 'PUT',
    data,
  });
};

export const del = (data: any) => {
  return request({
    url: '/services/v1/fworg',
    method: 'DELETE',
    data,
  });
};
