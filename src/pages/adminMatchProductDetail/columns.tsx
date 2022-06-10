const createColumns = (element: any) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '得分',
      dataIndex: 'amount',
    },
    {
      title: '策略名称',
      dataIndex: 'crm',
    },
    {
      title: '规则名称',
      dataIndex: 'gzmc',
    },
    {
      title: '模型名称',
      dataIndex: 'mxmc',
    },
    {
      title: '维度ID',
      dataIndex: 'wdid',
    },
    {
      title: '生成时间',
      dataIndex: 'createTime',
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
