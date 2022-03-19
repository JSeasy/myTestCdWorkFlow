import { NavLink } from 'umi';
import { Breadcrumb } from 'antd';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

const MAP: any = {
  '/match': '匹配管理',
  '/match/detail': '匹配详情',
  '/match/edit': '匹配编辑',
  '/product': '产品维度管理',
  '/product/:id': '产品维度管理',
  '/product/:id/fields': '字段管理',
};

const Breadcrumbs = (props: any) => {
  const { breadcrumbs } = props;
  console.log(breadcrumbs);
  return (
    <Breadcrumb>
      {breadcrumbs.map(
        (item: any, index: any) =>
          index > 0 && (
            <Breadcrumb.Item key={item.key}>
              <NavLink
                to={{
                  pathname: item.match.url,
                  state: item.location.state,
                  query: item.location.query,
                }}
              >
                {MAP[item.key]}
              </NavLink>
            </Breadcrumb.Item>
          ),
      )}
    </Breadcrumb>
  );
};

export default withBreadcrumbs()(Breadcrumbs);
