const createColumns = (element: any) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '列表名',
      dataIndex: 'label',
    },
    {
      title: '备注',
      dataIndex: 'comment',
    },
    {
      title: '名单类型',
      dataIndex: 'fieldType',
      render: (col: any) => {
        return col === 'WHITE' ? '白名单' : '黑名单';
      },
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
