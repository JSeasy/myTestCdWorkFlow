import styles from './index.less';
export default (props: any) => {
  return (
    <div className={styles.myTitle} style={props.style}>
      <h5 className={styles.title}>{props.title}</h5>
      <div className={styles.dash}></div>
    </div>
  );
};
