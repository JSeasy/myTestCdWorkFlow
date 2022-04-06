import { useState } from 'react';
import styles from './index.less';
import Pie from '@/components/pie';
import { get } from '@/api/userResult';
import { useEffect } from 'react';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

const hkfs: any = {
  1: '先息后本',
  2: '等额本息',
  3: '等额本金',
  4: '其他',
};
const splx: any = {
  1: '线上',
  2: '线下',
  3: '线上+线下',
};
const cplb: any = {
  1: '信用',
  2: '抵押',
  3: '其他',
};
export default (props: any) => {
  const [searchCondition, setSearchCondition] = useState({
    sortBy: 'ed',
    order: '',
  });
  const [list, setList] = useState([]);
  const search = (params?: any) => {
    get({ ...searchCondition, ...params }).then(({ data }) => {
      setList(data.page.list);
    });
  };
  const conditionChange = (newSortBy: string) => {
    const { sortBy, order } = searchCondition;
    if (newSortBy === sortBy) {
      if (order === '') {
        setSearchCondition({
          ...searchCondition,
          sortBy,
          order: 'desc',
        });
      } else if (order === 'desc') {
        setSearchCondition({
          ...searchCondition,
          sortBy,
          order: 'asc',
        });
      } else if (order === 'asc') {
        setSearchCondition({
          ...searchCondition,
          order: '',
          sortBy,
        });
      }
    } else {
      setSearchCondition({
        ...searchCondition,
        sortBy: newSortBy,
        order: '',
      });
    }
  };
  useEffect(() => {
    search();
  }, [searchCondition]);
  return (
    <div className={styles.userResult}>
      <div className={styles.bar}>
        <div
          className={[
            styles.barItem,
            searchCondition.sortBy === 'ed' ? styles.barItemActive : '',
          ].join(' ')}
          onClick={() => {
            conditionChange('ed');
          }}
        >
          额度优先
          {searchCondition.sortBy === 'ed' && (
            <span className={styles.sort}>
              <CaretUpOutlined
                style={{
                  color: searchCondition.order === 'desc' ? 'black' : '',
                }}
              />
              <CaretDownOutlined
                style={{
                  color: searchCondition.order === 'asc' ? 'black' : '',
                }}
              />
            </span>
          )}
        </div>
        <div
          className={[
            styles.barItem,
            searchCondition.sortBy === 'lilv' ? styles.barItemActive : '',
          ].join(' ')}
          onClick={() => {
            conditionChange('lilv');
          }}
        >
          额度优先
          {searchCondition.sortBy === 'lilv' && (
            <span className={styles.sort}>
              <CaretUpOutlined
                style={{
                  color: searchCondition.order === 'desc' ? 'black' : '',
                }}
              />
              <CaretDownOutlined
                style={{
                  color: searchCondition.order === 'asc' ? 'black' : '',
                }}
              />
            </span>
          )}
        </div>
        <div
          className={[
            styles.barItem,
            searchCondition.sortBy === 'fksj' ? styles.barItemActive : '',
          ].join(' ')}
          onClick={() => {
            conditionChange('fksj');
          }}
        >
          速度优先
          {searchCondition.sortBy === 'fksj' && (
            <span className={styles.sort}>
              <CaretUpOutlined
                style={{
                  color: searchCondition.order === 'desc' ? 'black' : '',
                }}
              />
              <CaretDownOutlined
                style={{
                  color: searchCondition.order === 'asc' ? 'black' : '',
                }}
              />
            </span>
          )}
        </div>
      </div>
      <div className={styles.list}>
        {list.map((item: any) => {
          const { pipeidu, cpmc, fksj, fkdw, ed, lilv } = item;
          return (
            <div className={styles.item} key={item.id}>
              <div className={styles.left}>
                <Pie percent={pipeidu ? pipeidu : 0} />
                <div className={styles.info}>
                  <h1>
                    <span>{cpmc}</span>
                    <span>{cplb[item.cplb]}贷款</span>
                  </h1>
                  <div className={styles.text}>
                    <p>还款方式:{hkfs[item.hkfs]}</p>
                    <p>
                      还款期限:{item.qxsj}
                      {item.qxdw == 1 ? '年' : '月'}
                    </p>
                    <p>贷款方式:{splx[item.splx]}</p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.rightItem}>
                  <h1>{ed}万</h1>
                  <p>放款额度</p>
                </div>
                <div className={styles.rightItem}>
                  <h1>{lilv}%</h1>
                  <p>放款年利率</p>
                </div>
                <div className={styles.rightItem}>
                  <h1>
                    {fksj}
                    {fkdw == 1 ? '天' : '月'}
                  </h1>
                  <p>放款速度</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
