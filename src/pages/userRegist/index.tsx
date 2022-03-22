import { useState } from 'react';
import styles from './index.less';
import cs from 'classnames';
export default (props: any) => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.regist}>
      <div className={styles.title}>
        <div
          className={cs(
            styles.icon,
            active >= 0 ? styles.iconActive : undefined,
          )}
        >
          <img src={require('./assets/1.png')} />
          <p>注册须知</p>
        </div>
        <div className={styles.dashed}></div>
        <div className={styles.icon}>
          <img src={require('./assets/2.png')} />
          <p>账号信息</p>
        </div>
        <div className={styles.dashed}></div>
        <div className={styles.icon}>
          <img src={require('./assets/3.png')} />
          <p>完善资料</p>
        </div>
      </div>
    </div>
  );
};
