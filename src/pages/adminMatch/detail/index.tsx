import Title from '@/components/title/index';
import ProductBlock from './components/productBlock';
import { Button } from 'antd';
import styles from './index.less';
import { useHistory } from 'umi';
import { useEffect, useState } from 'react';
import { getRow } from '@/api/match';

const gshy: any = {
  1: '服装',
  2: '餐饮',
  3: '房地产',
  4: '汽车',
  5: '互联网',
};

export default (props: any) => {
  const history = useHistory();
  const {
    location: { state },
  } = history;
  const [productList, setProductList] = useState([]);
  const [userInfo, setUserInfo] = useState<any>({});
  useEffect(() => {
    getRow(state.id).then((res) => {
      setProductList(res.data.pipeiInfo.productVOList);
      setUserInfo(res.data.pipeiInfo.userOrgInfoVO);
    });
  }, []);
  return (
    <div className={styles.matchDetail}>
      <Title title="企业信息" />
      <div className={styles.list}>
        <div className={styles.item}>
          <p>公司名称:</p>
          <p>{userInfo.orgName}</p>
        </div>
        <div className={styles.item}>
          <p>公司行业:</p>
          <p>{gshy[userInfo.gshy]}</p>
        </div>
        <div className={styles.item}>
          <p>联系人姓名:</p>
          <p>{userInfo.lxrxm}</p>
        </div>
        <div className={styles.item}>
          <p>联系电话:</p>
          <p>{userInfo.lxrdh}</p>
        </div>
      </div>
      <Title title="账号信息" />
      <div className={styles.list}>
        <div className={styles.item}>
          <p>登录手机号:</p>
          <p>{userInfo.xx}</p>
        </div>
        <div className={styles.item}>
          <p>登录密码:</p>
          <p>{userInfo.passwd}</p>
        </div>
      </div>
      <Title title="法人征信" />
      <div className={styles.list}>
        <div className={styles.item}>
          <p>法人征信报告:</p>
          <p>
            <span className="color">xxxxxxxxx</span>
          </p>
        </div>
      </div>
      <Title title="财务数据" />
      <div className={styles.list}>
        <div className={styles.item}>
          <p>纳税等级:</p>
          <p>xxxxxxxx</p>
        </div>
        <div className={styles.item}>
          <p>近一年纳税总额(万元):</p>
          <p>xxxxxxxx</p>
        </div>
        <div className={styles.item}>
          <p>企业当前负债余额"万元"：</p>
          <p>xxxxxxxx</p>
        </div>
      </div>
      <Title title="融资信息" />
      <div className={styles.list}>
        <div className={styles.item}>
          <p>融资类型:</p>
          <p>xxxxxxxx</p>
        </div>
        <div className={styles.item}>
          <p>融资偏好:</p>
          <p>额度优先</p>
        </div>
      </div>
      <Title title="产品信息" />
      <div className={styles.blockWrap}>
        {productList.map((product: any) => {
          return <ProductBlock product={product} />;
        })}
      </div>
      <Title title="备注" />
    </div>
  );
};
