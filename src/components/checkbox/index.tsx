import { Checkbox } from 'antd';
export default (props: any) => {
  const onchange = (e: any) => {
    const flag = e.target.checked ? 1 : 0;
    props.onChange(flag);
  };
  return (
    <Checkbox
      checked={props.checked == 1}
      onChange={(e) => {
        onchange(e);
      }}
    >
      {props.children}
    </Checkbox>
  );
};
