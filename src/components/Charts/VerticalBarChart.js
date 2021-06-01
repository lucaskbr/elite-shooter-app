import React from 'react';
import HighchartsReactNative from '@highcharts/highcharts-react-native/src/HighchartsReactNative';

const VerticalBarChart = (props) => {
  return (
    <HighchartsReactNative
          styles={{
            height: 200,
            width: '100%',
            backgroundColor: '#fff',
            justifyContent: 'center',
            flex: 1
        }}
          options={{
            chart: {
              type: 'column',
              backgroundColor: '#fff',
              spacing: [0, 0, 0, 0],
              margin: [0, 0, 0, 0],
            },
            credits: {
              enabled: false
            },
            title: {
              text: ''
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
                data: [1, 2, 3, 9, 5],

            },
            {
              showInLegend: false,
              color: '#ef5350',
              name: 'Erros',
              data: [1, 2, 3, 0, 10]
            }
          ]
        }}
      />
  )
}

export { VerticalBarChart };
