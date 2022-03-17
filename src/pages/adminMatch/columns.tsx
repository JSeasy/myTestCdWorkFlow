const createColumns = (element: any) => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      align: 'center',
    },
    {
      title: '操作',
      dataIndex: 'action',
      align: 'center',
      render: (col: any, row: any) => element(row, col),
    },
  ];
  return columns;
};

export default createColumns;
