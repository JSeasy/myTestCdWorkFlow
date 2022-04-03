import { DatePicker } from 'antd';
import { useEffect } from 'react';
import styles from './index.less';
export default (props: any) => {
  const { value } = props;
  console.log(11111111111111111);
  return (
    <div className={styles.myDatePicker}>
      <DatePicker
        onChange={(e, dateString) => {
          props.onChange([dateString, value[1]]);
        }}
      />
      <span>到</span>
      <DatePicker
        onChange={(e, dateString) => {
          props.onChange([value[0], dateString]);
        }}
      />
    </div>
  );
};
