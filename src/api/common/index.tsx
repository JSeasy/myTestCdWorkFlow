import request from '@/request';

// 获取列表
export const uploadFileApi = (data: any) => {
  return request({
    url: '/services/v1/common/uploadFile',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  });
};
