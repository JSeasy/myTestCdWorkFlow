const createOption = (percent: any) => {
  return {
    title: {
      text: percent + '%',
      textStyle: {
        color: '#5B51C1',
        fontSize: 32,
      },
      subtext: '匹配度',
      subtextStyle: {
        color: '#646093',
        fontSize: 14,
      },
      itemGap: -5, // 主副标题距离
      left: 'center',
      top: 'center',
    },
    angleAxis: {
      max: 100, // 满分
      clockwise: true, // 逆时针
      // 隐藏刻度线
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    radiusAxis: {
      type: 'category',
      // 隐藏刻度线
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    polar: {
      center: ['50%', '50%'],
      radius: '170%', // 图形大小
    },
    series: [
      {
        type: 'bar',
        data: [
          {
            name: '匹配度',
            value: percent,
            itemStyle: {
              normal: {
                color: '#FC896C',
              },
            },
          },
        ],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 13,
        barGap: '-100%', // 两环重叠
        z: 2,
      },
      {
        // 灰色环
        type: 'bar',
        data: [
          {
            value: 100,
            itemStyle: {
              color: '#EDEDF8',
            },
          },
        ],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 13,
        barGap: '-100%', // 两环重叠
        z: 1,
      },
    ],
  };
};
export default createOption;
