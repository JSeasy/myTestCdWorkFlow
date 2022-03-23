import request from '@/request';

// 获取列表
export const get = (data: any) => {
  return request({
    url: '/services/v1/role/query',
    method: 'POST',
    data,
  });
};

// 获取角色详情
export const getDetail = (id: any) => {
  return request({
    url: '/services/v1/role/' + id,
    method: 'GET',
  });
};

const a = [
  {
    pageName: '匹配管理',
    authList: [
      {
        id: 'xx',
        checked: false,
        name: '查看',
      },
      {
        id: 'xx',
        checked: true,
        name: '删除',
      },
    ],
  },
];
