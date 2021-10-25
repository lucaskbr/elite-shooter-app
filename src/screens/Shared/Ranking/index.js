import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';

import { AuthContext } from '@contexts/auth/authContext';

import { rankingsEndpoints } from '@services/eliteShooterApi/endpoints/rankingsEndpoints';

import { TopThree, ScreenContainer, RankingList } from '@components';
import { Alert } from 'react-native';
import { httpErrorMessages } from '@utils/httpErrorMessages';

const RankingScreen = (props) => {
  const { route } = props;
  const { period } = route.params;

  const { userId } = useContext(AuthContext);

  const isFocused = useIsFocused();

  const [isLoading, setIsLoading] = useState(true);
  const [userInFocus, setUserInFocus] = useState();
  const [topThree, setTopThree] = useState([]);
  const [ranking, setRanking] = useState([]);

  const findAllRankings = async () => {
    try {
      const { data } = await rankingsEndpoints.findAll({ period, afterPosition: 0, userIdToFocus: userId })

      const top = data.positions.slice(0, 3)
      const all = data.positions

      setTopThree(top);
      setRanking(all);
      setUserInFocus(data.userInFocus);
      setIsLoading(false);
    } catch (err) {
      const { status } = err.response
      Alert.alert('Desculpe', httpErrorMessages[status],  [{ text: 'OK' }]);
    }
  }

  useFocusEffect(
    useCallback(() => {
      findAllRankings()
      return () => {};
    }, []),
  );

  if (isLoading || topThree <= 0) {
    return <></>
  }

  return (
    <ScreenContainer backgroundColor="#00264D" statusBarColor="#00264D">
      <TopThree data={topThree} />
      <RankingList userInFocus={userInFocus} data={ranking} />
    </ScreenContainer>
  )
};

export { RankingScreen };
