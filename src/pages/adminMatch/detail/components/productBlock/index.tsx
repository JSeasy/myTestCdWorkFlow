import styles from './index.less';
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
const tkfs: any = {
  1: '自主支付',
  2: '受托支付',
  3: '其他',
};
const hkfs: any = {
  1: '先息后本',
  2: '等额本息',
  3: '等额本金',
  4: '其他',
};
export default (props: any) => {
  const { product } = props;

  return (
    <div className={styles.formBlock}>
      <div className={styles.formBlockWrap}>
        <div className={styles.productName}>{product.cpxh}</div>
        <div className={styles.productInfo}>
          <div className={styles.productItem}>
            <p>产品序号:</p>
            <p>{product.cpxh}</p>
          </div>
          <div className={styles.productItem}>
            <p>产品类别:</p>
            <p>{cplb[product.cplb]}</p>
          </div>
          <div className={styles.productItem}>
            <p>产品名称:</p>
            <p>{product.cpmc}</p>
          </div>
          <div className={styles.productItem}>
            <p>审批类型 :</p>
            <p>{splx[product.splx]}</p>
          </div>
          <div className={styles.productItem}>
            <p>额度:</p>
            <p>{product.ed}万</p>
          </div>
          <div className={styles.productItem}>
            <p>利率:</p>
            <p>{product.lilv}</p>
          </div>
          <div className={styles.productItem}>
            <p>期限:</p>
            <p>
              {product.qxsj}
              {product.qxdw === 1 ? '年' : '月'}
            </p>
          </div>
          <div className={styles.productItem}>
            <p>放款时间:</p>
            <p>
              {product.fksj}
              {product.fkdw === 1 ? '天' : '月'}
            </p>
          </div>
          <div className={styles.productItem}>
            <p>提款方式:</p>
            <p>{tkfs[product.tkfs]}</p>
          </div>
          <div className={styles.productItem}>
            <p>还款方式:</p>
            <p>{hkfs[product.hkfs]}</p>
          </div>
          <div className={styles.productItem}>
            <p>备注:</p>
            <p>{product.remark}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
