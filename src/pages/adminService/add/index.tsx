import Title from '@/components/title/index';
import { Form, Input, Button, Cascader } from 'antd';
import styles from './index.less';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 6, offset: 1 },
};
import MyForm from '../component/form';
import { useImmer } from 'use-immer';
import { useEffect, useState } from 'react';
import { getCityTree, add } from '@/api/service';
import { useHistory } from 'umi';
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
  const [tree, setTree] = useState([]);
  const [formValues, updateFormValues] = useImmer<any>([]);
  const [fromWhitch, setFromWhitch] = useState('add');
  const history = useHistory();
  useEffect(() => {
    getCityTree().then((res) => {
      setTree(res.data.areas);
    });
  }, []);
  return (
    <div className={styles.adminServiceAdd}>
      <Title title="企业信息" style={{ marginBottom: 40 }} />
      <Form {...layout} form={form}>
        <Form.Item
          label="地区/城市"
          name="city"
          required
          rules={[{ required: true, message: '请选择城市' }]}
        >
          <Cascader
            options={tree}
            size="large"
            fieldNames={{ label: 'name', value: 'id' }}
          />
        </Form.Item>
        <Form.Item
          name="orgName"
          label="服务企业名称"
          required
          rules={[{ required: true, message: '请填写服务企业' }]}
        >
          <Input size="large"></Input>
        </Form.Item>
      </Form>
      <Title title="产品信息" style={{ marginTop: 64, marginBottom: 20 }} />
      {formValues.map((item: any, index: any) => {
        return (
          <MyForm
            key={index}
            info={item}
            setFromWhitch={setFromWhitch}
            fromWhitch={fromWhitch}
            onDel={() => {
              updateFormValues((draft: any) => {
                draft.splice(index, 1);
              });
            }}
            onChange={(values: any) => {
              updateFormValues((draft: any) => {
                draft[index] = values;
              });
            }}
          />
        );
      })}
      <div style={{ textAlign: 'center' }}>
        <Button
          className="adminServiceAddBtn"
          onClick={() => {
            setFromWhitch('add');
            updateFormValues((draft: any) => {
              draft.push(info);
            });
          }}
        >
          新增
        </Button>
      </div>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Button
          className="adminServiceSaveBtn"
          onClick={() => {
            form.validateFields().then((values) => {
              const [szsfdm, szsqdm, szqxdm] = values.city;
              console.log(szsfdm, szsqdm, szqxdm);
              add({
                szsfdm,
                szsqdm,
                szqxdm,
                orgName: values.orgName,
                orgProductList: formValues,
              }).then(() => {
                history.push('/service');
              });
            });
          }}
        >
          保存
        </Button>
      </div>
    </div>
  );
};
