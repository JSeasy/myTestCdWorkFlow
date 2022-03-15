import Actions from './action/index';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
  {
    title: '操作',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
    render: (item: any, row: any) => {
      return <Actions item={item} row={row} />;
    },
  },
];

export default columns;
