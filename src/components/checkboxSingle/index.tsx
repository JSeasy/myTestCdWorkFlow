import styles from './index.less';
import { Checkbox } from 'antd';
export default (props: any) => {
  const { info } = props;
  const onChange = (e) => {
    props.onChange(e.pop());
  };
  return (
    <div className={styles.checkboxSingle}>
      <Checkbox.Group
        value={[props.value]}
        onChange={(e) => {
          onChange(e);
        }}
      >
        {info.map((item) => {
          return <Checkbox value={item.value}>{item.label}</Checkbox>;
        })}
      </Checkbox.Group>
    </div>
  );
};
