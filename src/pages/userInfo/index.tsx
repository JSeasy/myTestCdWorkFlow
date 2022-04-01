import styles from './index.less';
import RegistForm from '@/components/registForm';
import { Divider } from 'antd';
import { useEffect, useRef } from 'react';
import { get, recentMatch } from '@/api/info';
export default (props: any) => {
  const ref = useRef(null);
  useEffect(() => {
    get().then((res) => {
      console.log(res);
    });
    recentMatch().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className={styles.userInfo}>
      <div className={styles.left}>
        <RegistForm ref={ref} />
      </div>
      <div className={styles.right}>
        <h1>最近匹配结果</h1>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.title}>
              <h1>产品名</h1>
              <span>信用贷款</span>
              <span>95%</span>
            </div>
            <div className={styles.info}>
              <span>300万</span>
              <Divider type="vertical" className="divider" />
              <span>300万</span>
              <Divider type="vertical" className="divider" />
              <span>300万</span>
            </div>
            <div className={styles.tip}>
              <p>先息后本 / 1年期 / 线上</p>
            </div>
            <div className={styles.remark}>
              <p>
                备注:
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </p>
            </div>
          </div>
          <div className={styles.item}></div>
        </div>
      </div>
    </div>
  );
};
