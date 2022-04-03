import Sider from './components/sider';
import styles from './index.less';
import Breadcrumbs from './breadcrumbs';
import { getUserInfo } from '@/api/login';
import { useEffect, useState } from 'react';
import { Dropdown } from 'antd';
import Options from './components/options';
export default (props: any) => {
  const [info, setInfo] = useState<any>({});
  const getUserInfoHook = () => {
    getUserInfo().then(({ data }) => {
      setInfo(data.user);
    });
  };
  useEffect(() => {
    getUserInfoHook();
  }, []);
  return (
    <div className={styles.layout}>
      <Sider props={props} />
      <div className={styles.content}>
        <div className={styles.bar}>
          <span className={styles.routerName}>
            <Breadcrumbs />
          </span>
          <Dropdown overlay={<Options />}>
            <div className={styles.user}>
              <img src={require('./assets/1.png')} alt="" />
              <span>{info.userName}</span>
            </div>
          </Dropdown>
        </div>
        <div className={styles.mainContent}>{props.children}</div>
      </div>
    </div>
  );
};
