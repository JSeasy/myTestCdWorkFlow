import { NavLink } from 'umi';
import { Breadcrumb } from 'antd';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

const MAP: any = {
  '/match': '匹配管理',
  '/match/detail': '匹配详情',
  '/match/edit': '匹配编辑',
  '/product': '产品维度管理',
  '/product/fields': '产品维度',
  '/product/prehandle': '产品维度',
  '/product/white': '产品维度',
  '/product/abstract': '产品维度',
  '/product/strategy': '产品维度',
  '/product/whiteDetail': '产品维度',
  '/product/rules': '产品维度',
  '/role': '角色管理',
  '/role/edit': '编辑角色',
  '/role/add': '新增角色',
  '/account': '用户管理',
  '/account/add': '新增用户',
  '/account/edit': '编辑用户',
  '/customer': '客户企业',
  '/customer/add': '企业新增',
  '/customer/edit': '企业编辑',
  '/service': '服务企业',
  '/service/add': '服务企业新增',
  '/service/edit': '服务企业编辑',
};
const numberTest = /(\d+)$/g;
const endWithNumber = /(\d+)\//g;

const Breadcrumbs = (props: any) => {
  const { breadcrumbs } = props;
  return (
    <Breadcrumb>
      {breadcrumbs.map(
        (item: any, index: any) =>
          index > 0 &&
          !numberTest.test(item.key) && (
            <Breadcrumb.Item key={item.key}>
              <NavLink
                to={{
                  pathname: item.match.url,
                  state: item.location.state,
                  query: item.location.query,
                }}
              >
                {MAP[item.key.replace(endWithNumber, '')]}
              </NavLink>
            </Breadcrumb.Item>
          ),
      )}
    </Breadcrumb>
  );
};

export default withBreadcrumbs()(Breadcrumbs);
