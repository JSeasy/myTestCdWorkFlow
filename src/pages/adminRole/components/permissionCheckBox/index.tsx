import styles from './index.less';
import { Checkbox } from 'antd';
export default (props: any) => {
  const { data } = props;
  return (
    <div className={styles.permissionCb}>
      <div className="list">
        {data.map((item: any) => {
          return (
            <>
              <div className="item">
                <p>{item.menuName}:</p>
                <div className={styles.checkboxs}>
                  {item.children.map((child: any) => {
                    return (
                      <>
                        <Checkbox checked={child.checked}>
                          {child.menuName}
                        </Checkbox>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
