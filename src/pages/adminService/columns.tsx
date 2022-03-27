const createColumns = (element: any) => {
  const columns = [
    {
      title: '服务企业名称',
      dataIndex: 'orgName',
    },
    {
      title: '信用产品',
      dataIndex: 'xycpmc',
    },
    {
      title: '抵押产品',
      dataIndex: 'dycpmc',
    },
    {
      title: '其他产品',
      dataIndex: 'qtcpmc',
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
