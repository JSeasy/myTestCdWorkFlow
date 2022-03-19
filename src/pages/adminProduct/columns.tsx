const createColumns = (action: any, view: any) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '模型名',
      dataIndex: 'label',
    },
    {
      title: '实体名',
      dataIndex: 'entityName',
    },
    {
      title: '事件ID',
      dataIndex: 'entryName',
    },
    {
      title: '事件时间',
      dataIndex: 'referenceDate',
    },
    {
      title: '唯一标识',
      dataIndex: 'guid',
      render: (col: any, row: any) => view(row, col),
    },
    {
      title: '操作',
      dataIndex: 'action',
      render: (col: any, row: any) => action(row, col),
    },
  ];
  return columns;
};

export default createColumns;
