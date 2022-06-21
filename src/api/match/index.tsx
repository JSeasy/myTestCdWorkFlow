import request from '@/request';

export const get = (data: any) => {
  return request({
    url: '/services/v1/pipei/query',
    method: 'POST',
    data,
  });
};

export const edit = (data: any) => {
  return request({
    url: '/services/v1/pipei/edit',
    method: 'PUT',
    data,
  });
};
export const del = (data: any) => {
  return request({
    url: '/services/v1/pipei',
    method: 'DELETE',
    data,
  });
};

export const getRow = (id: any) => {
  return request({
    url: '/services/v1/pipei/' + id,
    method: 'GET',
  });
};

export const getInfo = () => {
  return request({
    url: '/services/v1/pipei/getPipeiCount',
    method: 'GET',
  });
};
