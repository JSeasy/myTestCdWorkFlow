import { useHistory, useParams } from 'umi';

export default (props: any) => {
  console.log(123123);
  console.log(props);
  console.log(useHistory(), useParams());
  return <div className="detail">123123123</div>;
};
