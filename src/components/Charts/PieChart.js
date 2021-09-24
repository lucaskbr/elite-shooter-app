import React, { useEffect } from 'react';
import _ from 'lodash';
import HighchartsReactNative from '@highcharts/highcharts-react-native/src/HighchartsReactNative';

const PieChart = (props) => {
  const { accurateRegions } = props;
  const { data, occurrencesScoreCount } = accurateRegions;

  console.log('________________________________')

  console.log(accurateRegions)
  console.log(_.get(occurrencesScoreCount, '9', 0))

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
                y: _.get(occurrencesScoreCount, '9', 0),
                color: '#CF56E2',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 8',
                y: _.get(occurrencesScoreCount, '8', 0),
                color: '#E256AD',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 7',
                y: _.get(occurrencesScoreCount, '7', 0),
                color: '#E25668',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 6',
                y: _.get(occurrencesScoreCount, '6', 0),
                color: '#E25668',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 5',
                y: _.get(occurrencesScoreCount, '5', 0),
                color: '#E28956',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 4',
                y: _.get(occurrencesScoreCount, '4', 0),
                color: '#E2CF56',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 3',
                y: _.get(occurrencesScoreCount, '3', 0),
                color: '#68E256',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 2',
                y: _.get(occurrencesScoreCount, '2', 0),
                color: '#56E289',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Região: 1',
                y: _.get(occurrencesScoreCount, '1', 0),
                color: '#56AEE2',
                borderWidth: 7,
                borderColor: '#fff',
              },
              {
                name: 'Erros',
                y: _.get(occurrencesScoreCount, '0', 0),
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
