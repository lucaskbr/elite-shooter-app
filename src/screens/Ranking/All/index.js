import * as React from 'react';
import { View, Text } from "react-native"
import { RankingList } from '../../../components/RankingList';
import { TopThree } from '../../../components/TopThree';

const RankingAllScreen = () => {
  return (
    <View style={{backgroundColor: '#00264D'}}>
      <TopThree />
      <RankingList />
    </View>
  )
}

export { RankingAllScreen }
