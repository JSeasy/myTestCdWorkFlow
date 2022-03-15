import styles from './index.less';
import { Select } from 'antd';
const { Option } = Select;
export default (props: any) => {
  return (
    <div className={styles.mySelect}>
      <Select onChange={props.onChange} value={props.value}>
        <Option value="">--{props.placeholder}--</Option>
        {props.data.map((item: any) => (
          <Option value={item.value} key={item.value}>
            {item.name}
          </Option>
        ))}
      </Select>
    </div>
  );
};
