import React, { useEffect } from 'react';
import HighchartsReactNative from '@highcharts/highcharts-react-native/src/HighchartsReactNative';

const VerticalBarChart = (props) => {
  const { shotsDiference } = props;
  const { data } = shotsDiference;

  return (
    <HighchartsReactNative
      styles={{
        height: 200,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        flex: 1,
      }}
      options={{
        chart: {
          type: 'column',
          backgroundColor: '#fff',
          spacing: [0, 0, 0, 0],
          margin: [0, 0, 0, 0],
        },
        credits: {
          enabled: false,
        },
        title: {
          text: '',
        },
        yAxis: {
          visible: false,
          minPadding: 0,
          maxPadding: 0,
        },
        series: [
          {
            showInLegend: false,
            color: '#3CBC98',
            name: 'Acertos',
            data: data.map(element => element.hits) || []
          },
          {
            showInLegend: false,
            color: '#ef5350',
            name: 'Erros',
            data: data.map(element => element.mistakes) || []
          },
        ],
      }}
    />
  );
};

export { VerticalBarChart };
