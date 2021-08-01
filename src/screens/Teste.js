import React from 'react';

import { View, Text } from 'react-native';

import { PieChart, VerticalBarChart } from '@components';

const Teste = () => (
  <>
    <View style={{ padding: 20 }}>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: 200,
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderWidth: 1,
          borderColor: '#fff',
          borderRadius: 15,
        }}
      >
        <View>
          <Text>Disparos: Acertos x Erros</Text>
          <Text>Ultimos 7 treinos</Text>
        </View>
        <VerticalBarChart />
      </View>
    </View>
    <View style={{ padding: 20 }}>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: 400,
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderWidth: 1,
          borderColor: '#fff',
          borderRadius: 15,
        }}
      >
        <View>
          <Text>Regiões com mais acerto</Text>
          <Text>Geral</Text>
        </View>
        <PieChart />
      </View>
    </View>
  </>
);

export { Teste };
