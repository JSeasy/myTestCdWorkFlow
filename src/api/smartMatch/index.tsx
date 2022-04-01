import request from '@/request';

// 获取列表
export const smartMatch = (params: any) => {
  return request({
    url: '/services/v1/pipei/znPipei',
    method: 'get',
    params,
  });
};
