export default (props: any) => {
  console.log(props.children);
  return (
    <>
      <div>
        {props.children}
        123123
      </div>
    </>
  );
};
