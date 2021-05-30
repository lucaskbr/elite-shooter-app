import * as React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

import { RankingItem } from './RankingItem';
import { RankingHeader } from './RankingHeader';
import { RankingSeparator } from './RankingSeparator';

const RankingList = (props) => {
  // const { label, result, colorLabel, colorResult } = props;

  return (
    <S.RankingList
    data={['1', '2', '3', '4', '5', '6', '7', '8', '9']}
    keyExtractor={(item, index) => `${item.id}${index}`}
    ListHeaderComponent={RankingHeader}
    ItemSeparatorComponent={() => <RankingSeparator />}
    renderItem={({ item }) => (
      <RankingItem />
    )}/>
  );
};

RankingList.propTypes = {
};

RankingList.defaultProps = {};

export { RankingList };
