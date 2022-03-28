import request from '@/request';

export const saveCompanyInfo = (data: any) => {
  return request({
    url: '/services/v1/org/khd/saveQy',
    method: 'POST',
    data,
  });
};

export const saveUserInfo = (data: any) => {
  return request({
    url: '/services/v1/user/khdregist',
    method: 'POST',
    data,
  });
};
