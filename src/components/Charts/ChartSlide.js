import React, { useEffect, useState } from 'react';
import { Text, View, useWindowDimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { ChartCard } from '../Cards/ChartCard';
import { PieChart } from './PieChart';
import { VerticalBarChart } from './VerticalBarChart';

const ChartSlide = (props) => {

  const { shotsDiference, accurateRegions } = props;

  const windowWidth = useWindowDimensions().width;

  const [index, setIndex] = useState(0);

  const renderCarouselItem = ({ item, index }) => {
    if (index == 0) {
      return (
        <ChartCard height={200} title="Regiões com mais acertos">
          <PieChart accurateRegions={accurateRegions} />
        </ChartCard>
      );
    }

    if (index == 1) {
      return (
        <ChartCard
          height={200}
          title="Disparos: Acertos x Erros"
          subtitle="Treino"
        >
          <VerticalBarChart shotsDiference={shotsDiference} />
        </ChartCard>
      );
    }

    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: '100%',
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  if (!accurateRegions || !accurateRegions.hasData || !shotsDiference || !shotsDiference.hasData) {
    return <></>
  }

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
        data={['1', '2']}
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
