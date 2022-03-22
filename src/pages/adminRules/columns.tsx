const createColumns = (element: any) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '策略名',
      dataIndex: 'label',
    },
    {
      title: '备注',
      dataIndex: 'comment',
    },
    {
      title: '警戒值',
      dataIndex: 'median',
    },
    {
      title: '拒绝值',
      dataIndex: 'high',
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
