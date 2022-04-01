import request from '@/request';

// 获取列表
export const get = () => {
  return request({
    url: '/services/v1/org/getOrgInfo',
    method: 'GET',
  });
};

export const recentMatch = () => {
  return request({
    url: '/services/v1/pipei/zjjgPipei',
    method: 'GET',
  });
};
