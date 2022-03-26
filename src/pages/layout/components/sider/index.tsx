import React from 'react';
import { useState } from 'react';
import { useHistory, useModel } from 'umi';
import styles from './index.less';
export default () => {
  const history = useHistory();
  const { location } = history;
  const { initialState, loading, error, refresh, setInitialState }: any =
    useModel('@@initialState');
  console.log(initialState);
  const [menuList, setMenuList] = useState([
    {
      name: '匹配管理',
      children: [],
      path: '/match',
      auth: initialState['/match'],
    },
    {
      path: '/man',
      name: '企业管理',
      auth: {
        read:
          initialState['/service']['read'] || initialState['/customer']['read'],
      },
      children: [
        {
          path: '/service',
          name: '服务企业管理',
          children: [],
          auth: initialState['/service'],
        },
        {
          path: '/customer',
          name: '客户企业管理',
          children: [],
          auth: initialState['/customer'],
        },
      ],
    },
    {
      path: '/product',
      name: '产品维度管理',
      children: [],
      auth: initialState['/product'],
    },
    {
      name: '平台管理',
      path: '/platform',
      auth: {
        read: initialState['/account']['read'] || initialState['/role']['read'],
      },
      children: [
        {
          name: '管理员',
          path: '/account',
          children: [],
          auth: initialState['/account'],
        },
        {
          name: '角色管理',
          path: '/role',
          children: [],
          auth: initialState['/role'],
        },
      ],
    },
    {
      path: '/system',
      name: '系统日志',
      children: [],
      auth: initialState['/system'],
    },
  ]);
  const renderMenuList = (menuList: any, isParent: boolean) => {
    return menuList.map((menu: any) => (
      <React.Fragment key={menu.path}>
        {menu.auth.read && (
          <div
            key={menu.path}
            className={`${isParent ? styles.menu : styles.menuItem} ${
              location.pathname === menu.path && styles.activeMenu
            }`}
            onClick={() => {
              !menu.children.length && history.push(menu.path);
            }}
          >
            {menu.name}
          </div>
        )}
        {!!menu.children.length && renderMenuList(menu.children, false)}
      </React.Fragment>
    ));
  };
  return (
    <div className={styles.sider}>
      <div className={styles.logo}>
        <img src={require('./assets/logo.png')} height="42" />
        <div className={styles.title}>
          <h5>欢迎使用</h5>
          <p>xxx系统</p>
        </div>
      </div>
      <div className={styles.menuWrap}>{renderMenuList(menuList, true)}</div>
    </div>
  );
};
