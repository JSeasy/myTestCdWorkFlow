import request from '@/request';

// 获取列表
export const smartMatch = (data: any) => {
  return request({
    url: '/services/v1/pipei/znPipei',
    method: 'POST',
    data,
  });
};
