const createColumns = (element: any) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '字段名',
      dataIndex: 'label',
    },
    {
      title: '来源字段名',
      dataIndex: 'sourceLabel',
    },
    {
      title: '插件',
      dataIndex: 'plugin',
    },
    {
      title: '插件参数(可选)',
      dataIndex: 'args',
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
