const gshy: any = {
  1: '服装',
  2: '餐饮',
  3: '房地产',
  4: '汽车',
  5: '互联网',
};
const createColumns = (element: any) => {
  const columns = [
    {
      title: '企业',
      dataIndex: 'orgName',
    },
    {
      title: '企业行业',
      dataIndex: 'gshy',
      render: (text: any) => {
        return <span>{gshy[text]}</span>;
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
