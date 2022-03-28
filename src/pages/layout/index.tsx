import Sider from './components/sider';
import styles from './index.less';
import Breadcrumbs from './breadcrumbs';
import { getUserInfo } from '@/api/login';
import { useEffect, useState } from 'react';

export default (props: any) => {
  const [info, setInfo] = useState({});
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
          <div className={styles.user}>
            <img src={require('./assets/1.png')} alt="" />
            <span>{info.userName}</span>
          </div>
        </div>
        <div className={styles.mainContent}>{props.children}</div>
      </div>
    </div>
  );
};
