import { Tabs } from 'antd';
import { useHistory, useParams } from 'umi';
const { TabPane } = Tabs;
export default (props: any) => {
  const history = useHistory();
  const params = useParams();
  const onchange = (target: string) => {
    history.replace('/product/' + params.id + '/' + target);
  };
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={onchange}>
        <TabPane tab="字段管理" key="fields"></TabPane>
        <TabPane tab="预处理管理" key="prehandle"></TabPane>
        <TabPane tab="黑/白名单管理" key="3"></TabPane>
        <TabPane tab="抽象处理" key="4"></TabPane>
        <TabPane tab="策略管理" key="5"></TabPane>
      </Tabs>
      {props.children}
    </>
  );
};
