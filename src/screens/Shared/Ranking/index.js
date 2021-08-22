import React, { useState, useEffect } from 'react';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';

import { TopThree, ScreenContainer, RankingList } from '@components';

const RankingScreen = (props) => {
  // const { route } = props;
  // const { id } = route.params;

  const isFocused = useIsFocused();

  const [isLoading, setIsLoading] = useState(true);
  const [topThree, setTopThree] = useState([]);
  const [ranking, setRanking] = useState([]);

  useFocusEffect(() => {});

  useFocusEffect(
    React.useCallback(() => {
      fetch(`/api/ranking/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setRanking((prevState) => [...prevState, ...json.list]);
          setTopThree(json.topThree);
          setIsLoading(false);
        });

      return () => {};
    }, []),
  );

  if (isLoading || isFocused) {
    return <></>
  }

  return (
    <ScreenContainer backgroundColor="#00264D" statusBarColor="#00264D">
      <TopThree data={topThree} />
      <RankingList data={ranking} />
    </ScreenContainer>
  )
};

export { RankingScreen };
