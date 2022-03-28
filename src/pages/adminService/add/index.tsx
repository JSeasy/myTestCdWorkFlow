import Title from '@/components/title/index';
import { Form, Input, Button } from 'antd';
import styles from './index.less';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 6, offset: 1 },
};
import MyForm from '../component/form';
import { useImmer } from 'use-immer';
export default (props: any) => {
  const [form] = Form.useForm();
  const info = {
    cplb: '1',
    cpmc: '',
    cpxh: '',
    ed: '',
    fkdw: '1',
    fksj: '',
    hkfs: '1',
    lilv: '',
    qxdw: '1',
    qxsj: '',
    remark: '',
    splx: '1',
    tkfs: '1',
  };
  const [formValues, updateFormValues] = useImmer<any>([]);
  return (
    <div className={styles.adminServiceAdd}>
      <Title title="企业信息" style={{ marginBottom: 40 }} />
      <Form {...layout} form={form}>
        <Form.Item label="地区/城市" required>
          <Input size="large"></Input>
        </Form.Item>
        <Form.Item label="服务企业名称" required>
          <Input size="large"></Input>
        </Form.Item>
      </Form>
      <Title title="产品信息" style={{ marginTop: 64, marginBottom: 20 }} />
      {formValues.map((item: any, index: any) => {
        return (
          <MyForm
            key={index}
            info={item}
            onChange={(values: any) => {
              updateFormValues((draft: any) => {
                draft[index] = values;
              });
            }}
          />
        );
      })}
      <Button
        onClick={() => {
          updateFormValues((draft: any) => {
            draft.push(info);
          });
        }}
      >
        新增
      </Button>
    </div>
  );
};
