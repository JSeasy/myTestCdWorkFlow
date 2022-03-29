import { useState } from 'react';
import styles from './index.less';
import Pie from '@/components/pie';
import { get } from '@/api/userResult';
import { useEffect } from 'react';
export default (props: any) => {
  const [searchCondition, setSearchCondition] = useState({
    sortBy: 'ed',
  });
  const search = (params?: any) => {
    get({ ...searchCondition, ...params }).then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    search();
  }, []);
  return (
    <div className={styles.userResult}>
      <div className={styles.bar}>
        <div
          className={[
            styles.barItem,
            searchCondition.sortBy === 'ed' ? styles.barItemActive : '',
          ].join(' ')}
          onClick={() => {
            setSearchCondition({
              ...searchCondition,
              sortBy: 'ed',
            });
          }}
        >
          利率优先
        </div>
        <div
          className={[
            styles.barItem,
            searchCondition.sortBy === 'lilv' ? styles.barItemActive : '',
          ].join(' ')}
          onClick={() => {
            setSearchCondition({
              ...searchCondition,
              sortBy: 'lilv',
            });
          }}
        >
          额度优先
        </div>
        <div
          className={[
            styles.barItem,
            searchCondition.sortBy === 'fksj' ? styles.barItemActive : '',
          ].join(' ')}
          onClick={() => {
            setSearchCondition({
              ...searchCondition,
              sortBy: 'fksj',
            });
          }}
        >
          速度优先
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.left}>
            <Pie percent={100} />
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
            <Pie percent={50} />
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
            <Pie percent={90} />
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
