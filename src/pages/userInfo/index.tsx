import styles from './index.less';
import RegistForm from '@/components/registForm';
import { Divider } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { get, recentMatch } from '@/api/info';
const cplb: any = {
  1: '信用',
  2: '抵押',
  3: '其他',
};
const splx: any = {
  1: '线上',
  2: '线下',
  3: '线上+线下',
};
const hkfs: any = {
  1: '先息后本',
  2: '等额本息',
  3: '等额本金',
  4: '其他',
};
export default (props: any) => {
  const ref = useRef(null);
  const [recentList, setRecentList] = useState<any>([]);
  const [info, setInfo] = useState({});
  useEffect(() => {
    get().then(({ data }) => {
      const form = ref.current.getForm();
      form.setFieldsValue({ ...data.userOrgInfo });
      setInfo(data.userOrgInfo);
    });
    recentMatch().then(({ data }) => {
      setRecentList(data.productList);
    });
  }, []);
  return (
    <div className={styles.userInfo}>
      <div className={styles.left}>
        <RegistForm
          ref={ref}
          isInfo={true}
          info={info}
          onchange={() => {
            get().then(({ data }) => {
              setInfo(data.userOrgInfo);
            });
          }}
        />
      </div>
      <div className={styles.right}>
        <h1>最近匹配结果</h1>
        <div className={styles.list}>
          {recentList.map((item: any) => {
            return (
              <div className={styles.item} key={item.id}>
                <div className={styles.title}>
                  <h1>{item.cpmc}</h1>
                  <span>{cplb[item.cplb]}贷款</span>
                  <span>{item.pipeiDu}%</span>
                </div>
                <div className={styles.info}>
                  <span>{item.ed}万</span>
                  <Divider type="vertical" className="divider" />
                  <span>{item.lilv}%</span>
                  <Divider type="vertical" className="divider" />
                  <span>
                    {item.fksj} {item.fkdw == 1 ? '天' : '月'}
                    放款
                  </span>
                </div>
                <div className={styles.tip}>
                  <p>
                    {hkfs[item.hkfs]} / {item.qxsj}
                    {item.qxdw == 1 ? '年' : '月'}/ {splx[item.splx]}
                  </p>
                </div>
                <div className={styles.remark}>
                  <p>
                    备注:
                    {item.remark}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
