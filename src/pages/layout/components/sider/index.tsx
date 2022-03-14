import React from 'react';
import { useState } from 'react';
import styles from './index.less';
export default () => {
  const [menuList, setMenuList] = useState([
    {
      name: '匹配管理',
      children: [],
      id: '1',
    },
    {
      id: '2',
      name: '企业管理',
      children: [
        {
          id: '2-1',
          name: '服务企业管理',
          children: [],
        },
        {
          id: '2-2',
          name: '客户企业管理',
          children: [],
        },
      ],
    },
    {
      id: '3',
      name: '产品维度管理',
      children: [],
    },
    {
      id: '4',
      name: '平台管理',
      children: [
        { name: '管理员', children: [], id: '4-1' },
        { name: '角色管理', children: [], id: '4-2' },
      ],
    },
    {
      id: '5',
      name: '系统日志',
      children: [],
    },
  ]);
  const [active, setActive] = useState('1');
  const renderMenuList = (menuList: any, isParent: boolean) => {
    return menuList.map((menu: any) => (
      <React.Fragment key={menu.id}>
        <div
          key={menu.id}
          className={`${isParent ? styles.menu : styles.menuItem} ${
            active === menu.id && styles.activeMenu
          }`}
          onClick={() => {
            setActive(menu.id);
          }}
        >
          {menu.name}
        </div>
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
