import Title from '@/components/title/index';
import ProductBlock from './components/productBlock';
import { Button } from 'antd';
import styles from './index.less';
import { useHistory } from 'umi';
export default (props: any) => {
  console.log(useHistory().location.state);
  return (
    <div className={styles.matchDetail}>
      <Button className="delBtn" style={{ marginBottom: '64px' }}>
        删除
      </Button>
      <Title title="产品信息" />
      <div className={styles.blockWrap}>
        <ProductBlock />
        <ProductBlock />
        <ProductBlock />
        <ProductBlock />
        <ProductBlock />
      </div>
    </div>
  );
};
