import request from '@/request';

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/user/search',
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

// 新增
export const add = (data: any) => {
  return request({
    url: '/services/v1/user/adminAddUser',
    method: 'POST',
    data,
  });
};

// 修改
export const edit = (data: any) => {
  return request({
    url: '/services/v1/user/updateUser',
    method: 'POST',
    data,
  });
};

export const getRoleType = () => {
  return request({
    url: '/services/v1/role/queryRoleList',
    method: 'GET',
  });
};
