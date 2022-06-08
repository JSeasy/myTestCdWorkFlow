import styles from './index.less';
import { Button } from 'antd';
const rzls: any = {
  1: '信用',
  2: '抵押',
  3: '其他',
};
const createColumns = (element: any) => {
  const columns = [
    {
      title: '企业名称',
      dataIndex: 'orgName',
    },
    {
      title: '需求金额',
      dataIndex: 'xqje',
    },
    {
      title: '融资类型',
      dataIndex: 'rzlx',
      render: (text: string) => {
        return <span>{rzls[text]}</span>;
      },
    },
    {
      title: '匹配状态',
      dataIndex: 'ppzt',
      render: (text: string) => {
        return (
          <span className={text === '1' ? styles.yipipei : styles.weipipei}>
            {text === '1' ? '已匹配' : '未匹配'}
          </span>
        );
      },
    },
    {
      title: '匹配文件',
      dataIndex: 'fileList',
      render(fileList: any) {
        return (
          <Button
            type="link"
            onClick={() => {
              window.open(fileList.addrUrl);
            }}
          >
            查看
          </Button>
        );
      },
    },
    {
      title: '匹配时间',
      dataIndex: 'ppsj',
    },

    {
      title: '操作',
      dataIndex: 'action',
      render: (col: any, row: any) => element(row, col),
    },
  ];
  return columns;
};

export default createColumns;
