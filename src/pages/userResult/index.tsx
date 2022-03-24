import { useState } from 'react';
import styles from './index.less';
import Pie from '@/components/pie';
export default (props: any) => {
  const [searchCondition, setSearchCondition] = useState({
    active: 1,
  });
  return (
    <div className={styles.userResult}>
      <div className={styles.bar}>
        <div
          className={[
            styles.barItem,
            searchCondition.active === 1 ? styles.barItemActive : '',
          ].join(' ')}
          onClick={() => {
            setSearchCondition({
              ...searchCondition,
              active: 1,
            });
          }}
        >
          利率优先
        </div>
        <div
          className={[
            styles.barItem,
            searchCondition.active === 2 ? styles.barItemActive : '',
          ].join(' ')}
          onClick={() => {
            setSearchCondition({
              ...searchCondition,
              active: 2,
            });
          }}
        >
          额度优先
        </div>
        <div
          className={[
            styles.barItem,
            searchCondition.active === 3 ? styles.barItemActive : '',
          ].join(' ')}
          onClick={() => {
            setSearchCondition({
              ...searchCondition,
              active: 3,
            });
          }}
        >
          速度优先
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.left}>
            <Pie percent={12} />
            <div className={styles.info}>
              <h1>
                <span>产品名产品名产品名</span>
                <span>信用贷款</span>
              </h1>
              <div className={styles.text}>
                <p>还款方式:先息后本</p>
                <p>还款期限:1年</p>
                <p>贷款方式:线上</p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightItem}>
              <h1>500万</h1>
              <p>放款额度</p>
            </div>
            <div className={styles.rightItem}>
              <h1>500万</h1>
              <p>放款额度</p>
            </div>
            <div className={styles.rightItem}>
              <h1>500万</h1>
              <p>放款额度</p>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <Pie percent={12} />
            <div className={styles.info}>
              <h1>
                <span>产品名产品名产品名</span>
                <span>信用贷款</span>
              </h1>
              <div className={styles.text}>
                <p>还款方式:先息后本</p>
                <p>还款期限:1年</p>
                <p>贷款方式:线上</p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightItem}>
              <h1>500万</h1>
              <p>放款额度</p>
            </div>
            <div className={styles.rightItem}>
              <h1>500万</h1>
              <p>放款额度</p>
            </div>
            <div className={styles.rightItem}>
              <h1>500万</h1>
              <p>放款额度</p>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <Pie percent={12} />
            <div className={styles.info}>
              <h1>
                <span>产品名产品名产品名</span>
                <span>信用贷款</span>
              </h1>
              <div className={styles.text}>
                <p>还款方式:先息后本</p>
                <p>还款期限:1年</p>
                <p>贷款方式:线上</p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightItem}>
              <h1>500万</h1>
              <p>放款额度</p>
            </div>
            <div className={styles.rightItem}>
              <h1>500万</h1>
              <p>放款额度</p>
            </div>
            <div className={styles.rightItem}>
              <h1>500万</h1>
              <p>放款额度</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
