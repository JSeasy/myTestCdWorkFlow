import styles from './index.less';
import Search from '@/components/searchInput';
import Table from '@/components/table';
import Select from '@/components/select';
import { useEffect, useState } from 'react';
import model from './columns';
import Events from '@/events/index';
export default (props: any) => {
  const [searchCondition, setSearchCondition] = useState({
    name: '',
    top: '',
  });

  const [data, setData] = useState([
    { name: 1, age: 2, address: 3 },
    { name: 1, age: 2, address: 3 },
  ]);
  useEffect(() => {
    Events.addListener('refresh', () => {
      console.log('refresh');
    });
    return () => {
      Events.removeAllListeners();
      console.log('remove');
    };
  }, []);
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
              placeholder={'企业区域'}
              value={searchCondition.top}
              onChange={(e: any) => {
                setSearchCondition({ ...searchCondition, top: e });
              }}
              data={[
                { name: '信用', value: 1 },
                { name: '抵押', value: 2 },
                { name: '其他', value: 3 },
              ]}
            />
          </div>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};
