import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Text, View, useWindowDimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { ChartCard } from '../Cards/ChartCard';
import { LineChart } from './LineChart';
import { PieChart } from './PieChart';
import { VerticalBarChart } from './VerticalBarChart';

const ChartSlide = (props) => {

  const { shotsDiference, scoreHistory, accurateRegions } = props;
  const [chartsToRender, setChartsToRender] = useState([]);

  const windowWidth = useWindowDimensions().width;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const chartsWithData = []

      shotsDiference && shotsDiference.hasData && chartsWithData.push({
        name: 'shotsDiference',
        data: shotsDiference.data
      })

      accurateRegions && accurateRegions.hasData && chartsWithData.push({
        name: 'accurateRegions',
        data: accurateRegions.data
      })

      scoreHistory && scoreHistory.hasData  && chartsWithData.push({
        name: 'scoreHistory',
        data: scoreHistory.data
      })

      console.log(chartsWithData.map(e => e.name))

      setChartsToRender(chartsWithData)
      
    })();
  }, []);

  const handleChartToRender = (name) => {
    if (name === 'shotsDiference') {
      return (
        <ChartCard
        height={200}
        title="Disparos: Acertos x Erros"
        subtitle="Treino"
      >
        <VerticalBarChart shotsDiference={shotsDiference} />
      </ChartCard>
      )
    }

    if (name === 'accurateRegions') {
      return (
        <ChartCard height={200} title="Regiões com mais acertos">
          <PieChart accurateRegions={accurateRegions} />
        </ChartCard>
      );
    }

    if (name === 'scoreHistory') {
      return (
        <ChartCard height={200} title="Historico da ultima atividade">
          <LineChart scoreHistory={scoreHistory} />
        </ChartCard>
      );
    }

  }

  const renderCarouselItem = ({ item, index }) => {
    return handleChartToRender(_.get(chartsToRender, `[${index}].name`))
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Carousel
        style={{ backgroundColor: 'blue' }}
        layout="default"
        data={chartsToRender.map(e => e && e.name)}
        sliderWidth={windowWidth}
        itemWidth={windowWidth - 50}
        renderItem={renderCarouselItem}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView
        enableSnap
        // loop
      />
    </View>
  );
};

export { ChartSlide };
