const createColumns = (element: any) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '角色名',
      dataIndex: 'roleName',
    },
    {
      title: '描述',
      dataIndex: 'remark',
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
