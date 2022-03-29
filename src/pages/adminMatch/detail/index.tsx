import Title from '@/components/title/index';
import ProductBlock from './components/productBlock';
import { Button } from 'antd';
import styles from './index.less';
import { useHistory } from 'umi';
import { useEffect, useState } from 'react';
import { getRow } from '@/api/match';
export default (props: any) => {
  const history = useHistory();
  const {
    location: { state },
  } = history;
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getRow(state.id).then((res) => {
      setProductList(res.data.pipeiInfo.productVOList);
    });
  }, []);
  return (
    <div className={styles.matchDetail}>
      <Title title="企业信息" />

      <div className={styles.companyInfo}>
        <div></div>
      </div>
      <Title title="产品信息" />
      <div className={styles.blockWrap}>
        {productList.map((product: any) => {
          return <ProductBlock product={product} />;
        })}
      </div>
    </div>
  );
};
