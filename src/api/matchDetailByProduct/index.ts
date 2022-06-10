import request from '@/request';

export const get = (data: any) => {
  return request({
    url: '/services/v1/jieguo/query',
    method: 'POST',
    data,
  });
};

export const edit = (data: any) => {
  return request({
    url: '/services/v1/jieguo/edit',
    method: 'PUT',
    data,
  });
};

export const getRow = (id: any) => {
  return request({
    url: '/services/v1/jieguo/' + id,
    method: 'GET',
  });
};
