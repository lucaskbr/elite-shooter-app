import React from 'react';
import HighchartsReactNative from '@highcharts/highcharts-react-native/src/HighchartsReactNative';

const PieChart = (props) => {
  return (
    <HighchartsReactNative
          styles={{
            height: '100%',
            width: '100%',
            backgroundColor: '#fff',
            justifyContent: 'center',
            flex: 1
        }}
          options={{
            chart: {
              type: 'pie',
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
                name: 'Regiões com mais acertos',
                data: [
                  {
                    name: '9',
                    y: 10,
                    color: '#CF56E2',
                    borderWidth: 7,
                    borderColor: '#fff'
                  },
                  {
                    name: '8',
                    y: 10,
                    color: '#E256AD',
                    borderWidth: 7,
                    borderColor: '#fff'
                  },
                  {
                    name: '7',
                    y: 10,
                    color: '#E25668',
                    borderWidth: 7,
                    borderColor: '#fff'
                  },
                  {
                    name: '6',
                    y: 10,
                    color: '#E25668',
                    borderWidth: 7,
                    borderColor: '#fff'
                  },
                  {
                    name: '5',
                    y: 10,
                    color: '#E28956',
                    borderWidth: 7,
                    borderColor: '#fff'
                  },
                  {
                    name: '4',
                    y: 11,
                    color: '#E2CF56',
                    borderWidth: 7,
                    borderColor: '#fff'
                  },
                  {
                    name: '3',
                    y: 10,
                    color: '#68E256',
                    borderWidth: 7,
                    borderColor: '#fff'
                  },
                  {
                    name: '2',
                    y: 10,
                    color: '#56E289',
                    borderWidth: 7,
                    borderColor: '#fff'
                  },
                  {
                    name: '1',
                    y: 10,
                    color: '#56AEE2',
                    borderWidth: 7,
                    borderColor: '#fff'
                  },
                ],
                innerSize: '70%',
                dataLabels: {
                  enabled: false,
                  // style: {
                  //   fontSize: 14,
                  //   textOutline: false
                  // }
                }
              }
            ]
        }}
      />
  )
}

export { PieChart };
