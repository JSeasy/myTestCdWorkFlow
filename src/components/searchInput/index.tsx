import { Input } from 'antd';
import styles from './index.less';
const { Search } = Input;
export default (props: any) => {
  return (
    <div className={styles.mySearch}>
      <Search
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onPressEnter={props.onPressEnter}
        onSearch={props.onSearch}
      />
    </div>
  );
};
