import React, { useState, useEffect } from 'react';
import { IsLoading, ScreenContainer } from '../../components';
import { RankingList } from '../../components/RankingList';
import { TopThree } from '../../components/TopThree';

import { useIsFocused, useFocusEffect } from '@react-navigation/native';

const RankingScreen = (props) => {

  const { route } = props;
  const { id } = route.params;

  const isFocused = useIsFocused();

  const [isLoading, setIsLoading] = useState(true);
  const [topThree, setTopThree] = useState([]);
  const [ranking, setRanking] = useState([]);

  useFocusEffect(() => {
    
  })

  useFocusEffect(
    React.useCallback(() => {
      fetch(`/api/ranking/${id}`)
      .then((res) => res.json())
      .then(json => {
        setRanking((prevState) => ([...prevState, ...json.list]));
        setTopThree(json.topThree);
        setIsLoading(false);
      })

      return () => {};
    }, [])
  );

  return (
    isFocused ?
    <ScreenContainer backgroundColor="#00264D" statusBarColor="#00264D">
      <IsLoading condition={isLoading}>
        <TopThree data={topThree} />
        <RankingList data={ranking} />
      </IsLoading>
    </ScreenContainer> : null
  )
}

export { RankingScreen }
