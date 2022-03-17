const createColumns = (action: any, view: any) => {
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
      render: (col: any, row: any) => view(row, col),
    },
    {
      title: '操作',
      dataIndex: 'action',
      align: 'center',
      render: (col: any, row: any) => action(row, col),
    },
  ];
  return columns;
};

export default createColumns;
