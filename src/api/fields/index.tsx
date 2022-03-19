import request from '@/request';

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/field',
    method: 'POST',
    data,
  });
};

// 删除
export const del = (data: any) => {
  return request({
    url: '/services/v1/field',
    method: 'DELETE',
    data,
  });
};

// 新增
export const add = (data: any) => {
  return request({
    url: '/services/v1/field',
    method: 'PUT',
    data,
  });
};

// 获取字段类型
export const getFieldType = () => {
  return request({
    url: '/services/v1/common/fieldtypes',
    method: 'GET',
  });
};
