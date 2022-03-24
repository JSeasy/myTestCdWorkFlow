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
};
const numberTest = /(\d+)$/g;
const endWithNumber = /(\d+)\//g;

const Breadcrumbs = (props: any) => {
  const { breadcrumbs } = props;
  console.log(breadcrumbs);
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
