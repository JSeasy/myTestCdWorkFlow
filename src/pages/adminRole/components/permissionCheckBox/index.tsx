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
          {item.children.map((child: any) => {
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
  return (
    <div className={styles.permissionCb}>
      <div className="list">
        <Checkbox.Group onChange={onChange} value={menuIds}>
          {data.map((item: any) => {
            return renderSub(item);
          })}
        </Checkbox.Group>
      </div>
    </div>
  );
};
