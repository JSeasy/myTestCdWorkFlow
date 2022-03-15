import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import Select from '@/components/select';
import { useState } from 'react';
import model from './columns';
export default (props: any) => {
  const [searchCondition, setSearchCondition] = useState({
    name: '',
    top: '',
  });

  const [data, setData] = useState([
    { name: 1, age: 2, address: 3 },
    { name: 1, age: 2, address: 3 },
    { name: 1, age: 2, address: 3 },
    { name: 1, age: 2, address: 3 },
    { name: 1, age: 2, address: 3 },
    { name: 1, age: 2, address: 3 },
    { name: 1, age: 2, address: 3 },
    { name: 1, age: 2, address: 3 },
    { name: 1, age: 2, address: 3 },
    { name: 1, age: 2, address: 3 },
    { name: 1, age: 2, address: 3 },
  ]);

  const [columns, setCoumns] = useState(model);

  const search = () => {
    console.log(searchCondition);
  };
  return (
    <>
      <div className={styles.adminMatch}>
        <div className={styles.topBar}>
          <div className={styles.searchCondition}>
            <Search
              placeholder={'请输入产品名称'}
              value={searchCondition.name}
              onChange={(e: any) => {
                setSearchCondition({
                  ...searchCondition,
                  name: e.target.value,
                });
              }}
              onPressEnter={search}
              onSearch={search}
            />
            <Select
              placeholder={'产品类型'}
              value={searchCondition.top}
              onChange={(e: any) => {
                console.log(e);
                setSearchCondition({ ...searchCondition, top: e });
              }}
              data={[
                { name: 1, value: 1 },
                { name: 2, value: 2 },
              ]}
            />
          </div>
          <div className={styles.count}>
            <div className={styles.card}>
              <img src={require('./assets/1.png')} height="60" />
              <div className={styles.text}>
                <h5>190</h5>
                <p>匹配总量</p>
              </div>
            </div>
            <div className={styles.card}>
              <img src={require('./assets/2.png')} height="60" />
              <div className={styles.text}>
                <h5>12</h5>
                <p>待办事项</p>
              </div>
            </div>
          </div>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};
