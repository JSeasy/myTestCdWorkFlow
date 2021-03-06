const createColumns = (element: any) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '字段名称',
      dataIndex: 'fieldName',
    },
    {
      title: '显示名称',
      dataIndex: 'label',
    },
    {
      title: '字段类型',
      dataIndex: 'fieldType',
    },
    {
      title: '是否索引',
      dataIndex: 'indexed',
      render: (col: any) => <>{col ? '是' : '否'}</>,
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
