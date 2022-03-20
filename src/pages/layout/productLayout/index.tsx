import { Tabs } from 'antd';
import { useMemo } from 'react';
import { useHistory, useParams } from 'umi';
const { TabPane } = Tabs;
export default (props: any) => {
  const history = useHistory();
  // const params = useMemo(() => {
  //   console.log('emo');
  //   return useParams();
  // }, []);
  const params = useParams();

  const memo = useMemo(() => {
    console.log(',emo');
    return () => params.id;
  }, []);

  const onchange = (target: string) => {
    history.replace('/product/' + memo() + '/' + target);
  };
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={onchange}>
        <TabPane tab="字段管理" key="fields"></TabPane>
        <TabPane tab="预处理管理" key="prehandle"></TabPane>
        <TabPane tab="黑/白名单管理" key="white"></TabPane>
        <TabPane tab="抽象处理" key="4"></TabPane>
        <TabPane tab="策略管理" key="5"></TabPane>
      </Tabs>
      {props.children}
    </>
  );
};
