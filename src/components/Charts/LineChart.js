import React, { useEffect } from 'react';
import _ from 'lodash';
import HighchartsReactNative from '@highcharts/highcharts-react-native/src/HighchartsReactNative';

const LineChart = (props) => {
  const { scoreHistory } = props;
  const { data } = scoreHistory;

  return (
    <HighchartsReactNative
      styles={{
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        flex: 1,
      }}
      options={{
        chart: {
          type: 'line',
          // backgroundColor: '#fff',
          // spacing: [0, 0, 0, 0],
          // margin: [0, 0, 0, 0],
          height: '200px',
        },
        credits: {
          enabled: false,
        },
        title: {
          text: '',
        },
        yAxis: {
          visible: false,
        },
        // xAxis: {
        //   visible: true,
        //   // minPadding: 0,
        //   // maxPadding: 0,
        // },
        series: data.map(e => ({
          data: e.scores,
          color: '#000',
          name: 'Pontuação'
        }))
      }}
    />
  );
};

export { LineChart };
