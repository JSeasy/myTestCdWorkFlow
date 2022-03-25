import styles from './index.less';
import { Checkbox } from 'antd';
import { useImmer } from 'use-immer';
import React from 'react';

export default (props: any) => {
  const { data, onChange, menuIds } = props;
  const renderSub = (item: any) => {
    return (
      <div className="item" key={item.menuId}>
        <p>{item.menuName}:</p>
        <div className={styles.checkboxs}>
          {item.auth.map((child: any) => {
            return (
              <React.Fragment key={child.menuId}>
                <Checkbox value={child.menuId}>{child.menuName}</Checkbox>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  };
  const renderSubByChildren = (item: any, children: any) => {
    return children.map((child: any) => {
      return (
        <div className="item" key={child.menuId}>
          <p>
            {item.menuName}-{child.menuName}:
          </p>
          <div className={styles.checkboxs}>
            {child.auth.map((child: any) => {
              return (
                <React.Fragment key={child.menuId}>
                  <Checkbox value={child.menuId}>{child.menuName}</Checkbox>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      );
    });
  };
  return (
    <div className={styles.permissionCb}>
      <div className="list">
        <Checkbox.Group onChange={onChange} value={menuIds}>
          {data.map((item: any) => {
            return item.children.length
              ? renderSubByChildren(item, item.children)
              : renderSub(item);
          })}
        </Checkbox.Group>
      </div>
    </div>
  );
};
