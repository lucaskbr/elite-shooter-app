import React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

import { RankingItem } from './RankingItem';
import { RankingHeader } from './RankingHeader';
import { RankingSeparator } from './RankingSeparator';

const RankingList = (props) => {
  const { userInFocus, data } = props;

  return (
    <S.RankingList
      data={data}
      keyExtractor={(item, index) => `${item._id}`}
      ListHeaderComponent={RankingHeader}
      // stickyHeaderIndices={[0]}
      ItemSeparatorComponent={() => <RankingSeparator />}
      renderItem={({ item, index }) => (
        <RankingItem userInFocus={userInFocus} data={{ ...item, index }} />
      )}
    />
  );
};

RankingList.propTypes = {
  data: PropTypes.array,
};

RankingList.defaultProps = {};

export { RankingList };
