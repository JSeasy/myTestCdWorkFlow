import { NavLink } from 'umi';
import { Breadcrumb } from 'antd';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

const routes = [
  { path: '/home', breadcrumb: '首页' },
  { path: '/home/category-detail', breadcrumb: '详情' },
];

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
                {item.breadcrumb.props.children}
              </NavLink>
            </Breadcrumb.Item>
          ),
      )}
    </Breadcrumb>
  );
};

export default withBreadcrumbs(routes)(Breadcrumbs);
