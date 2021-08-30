import React from 'react';
import HighchartsReactNative from '@highcharts/highcharts-react-native/src/HighchartsReactNative';

const PieChart = (props) => {

  const { data } = props;


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
          type: 'pie',
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
            name: 'Quantidade',
            data: [
              {
                name: 'Região: 9',
                y: data.occurrencesCount['9'] || 0,
                color: '#CF56E2',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 8',
                y: data.occurrencesCount['8'] || 0,
                color: '#E256AD',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 7',
                y: data.occurrencesCount['7'] || 0,
                color: '#E25668',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 6',
                y: data.occurrencesCount['6'] || 0,
                color: '#E25668',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 5',
                y: data.occurrencesCount['5'] || 0,
                color: '#E28956',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 4',
                y: data.occurrencesCount['4'] || 0,
                color: '#E2CF56',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 3',
                y: data.occurrencesCount['3'] || 0,
                color: '#68E256',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 2',
                y: data.occurrencesCount['2'] || 0,
                color: '#56E289',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 1',
                y: data.occurrencesCount['1'] || 0,
                color: '#56AEE2',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Erros',
                y: data.occurrencesCount['0'] || 0,
                color: '#000',
                borderWidth: 7,
                borderColor: '#fff',
              },
            ],
            innerSize: '70%',
            dataLabels: {
              enabled: false,
              // style: {
              //   fontSize: 14,
              //   textOutline: false
              // }
            },
          },
        ],
      }}
    />
  );
};

export { PieChart };
