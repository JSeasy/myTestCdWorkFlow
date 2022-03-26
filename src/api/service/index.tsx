import request from '@/request';

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/org/query',
    method: 'POST',
    data,
  });
};

// // 保存
// export const save = (data: any) => {
//   return request({
//     url: '/services/v1/rule',
//     method: 'PUT',
//     data,
//   });
// };

// // 删除
// export const del = (data: any) => {
//   return request({
//     url: '/services/v1/rule',
//     method: 'DELETE',
//     data,
//   });
// };

// // 获取指标字段
// export const getFields = (id: any) => {
//   return request({
//     url: '/services/v1/activation/feature/columns/' + id,
//     method: 'GET',
//   });
// };
