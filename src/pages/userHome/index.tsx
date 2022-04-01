import styles from './index.less';
import RegistForm from '@/components/registForm';
import { Checkbox, Button } from 'antd';
import { useRef } from 'react';
import { smartMatch } from '@/api/smartMatch';
export default (props: any) => {
  const ref = useRef(null);
  const match = () => {
    ref.current.validateForm().then((values) => {
      smartMatch(values);
    });
  };
  return (
    <div className={styles.userHome}>
      <RegistForm ref={ref} />
      <div className={styles.submit}>
        <p>不查征信,精准测额</p>
        <div className={styles.service}>
          <Checkbox></Checkbox>
          <p>
            我已阅读并同意
            <span className="color">《服务条款、隐私信息及授权》</span>
          </p>
        </div>
        <Button
          onClick={() => {
            match();
          }}
        >
          智能精准匹配
        </Button>
      </div>
    </div>
  );
};
