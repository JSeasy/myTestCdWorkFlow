import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import createOption from './option';
export default (props: any) => {
  const inputRef = useRef(null);
  useEffect(() => {
    const { percent, index } = props;
    var myChart = echarts.init(inputRef.current);
    const option = createOption(percent);
    myChart.setOption(option);
  }, []);
  return <div ref={inputRef} style={{ width: 126, height: 126 }}></div>;
};
