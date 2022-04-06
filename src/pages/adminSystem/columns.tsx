const createColumns = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: '操作类型',
      dataIndex: 'czlx',
      align: 'center',
    },
    {
      title: '管理员',
      dataIndex: 'userName',
      align: 'center',
    },
    {
      title: '操作时间',
      dataIndex: 'createTime',
      align: 'center',
    },
    {
      title: '操作内容',
      dataIndex: 'cznr',
      align: 'center',
    },
  ];
  return columns;
};

export default createColumns;
