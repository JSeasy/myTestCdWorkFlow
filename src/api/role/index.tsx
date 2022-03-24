import request from '@/request';

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/role/query',
    method: 'POST',
    data,
  });
};

// 获取角色详情
export const getDetail = (id: any) => {
  return request({
    url: '/services/v1/role/' + id,
    method: 'GET',
  });
};

// 获取角色详情
export const getAllAuth = () => {
  return request({
    url: '/services/v1/role/getAllMenus',
    method: 'GET',
  });
};

export const add = (data: any) => {
  return request({
    url: '/services/v1/role',
    method: 'POST',
    data,
  });
};
