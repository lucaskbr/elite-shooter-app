import React, { useState, useCallback, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { AuthContext } from '@contexts/auth/authContext';

import { rankingsEndpoints } from '@services/eliteShooterApi/endpoints/rankingsEndpoints';

import { alertErrorFromHttpCall } from '@utils/alertErrorFromHttpCall';

import { TopThree, ScreenContainer, RankingList, IsLoading } from '@components';

const RankingScreen = (props) => {
  const { route } = props;
  const { period } = route.params;

  const { userId } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [userInFocus, setUserInFocus] = useState();
  const [topThree, setTopThree] = useState([]);
  const [ranking, setRanking] = useState([]);

  const findAllRankings = async () => {
    try {
      setIsLoading(true);
      const { data } = await rankingsEndpoints.findAll({
        period,
        afterPosition: 0,
        userIdToFocus: userId,
      });

      const top = data.positions.slice(0, 3);
      const all = data.positions;

      setTopThree(top);
      setRanking(all);
      setUserInFocus(data.userInFocus);
    } catch (err) {
      alertErrorFromHttpCall(err);
    }
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      findAllRankings()
    }, []),
  );

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <ScreenContainer backgroundColor="#00264D" statusBarColor="#00264D">
      {topThree && topThree.length > 0 && <TopThree data={topThree} />} 
      <RankingList userInFocus={userInFocus} data={ranking} />
    </ScreenContainer>
  )
};

export { RankingScreen };
