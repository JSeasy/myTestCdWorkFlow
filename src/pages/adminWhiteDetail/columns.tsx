const createColumns = (element: any, col: any) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    col,

    {
      title: '操作',
      dataIndex: 'action',
      render: (col: any, row: any) => element(row, col),
    },
  ];
  return columns;
};

export default createColumns;
