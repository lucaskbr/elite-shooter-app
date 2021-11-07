import React from 'react';
import PropTypes from 'prop-types';

import { S } from './style';

import { RankingItem } from './RankingItem';
import { RankingHeader } from './RankingHeader';
import { RankingSeparator } from './RankingSeparator';
import { EmptyList } from '../EmptyList';

const RankingList = (props) => {
  const { userInFocus, data } = props;

  return (
    <S.RankingList
      data={data}
      contentContainerStyle={{ flexGrow: 1 }}
      keyExtractor={(item, index) => `${item._id}`}
      ListHeaderComponent={data && data.length && RankingHeader}
      // stickyHeaderIndices={[0]}
      ListEmptyComponent={(
        <S.EmptyData>
          <EmptyList text="Nenhuma pontuação encontrada" />
        </S.EmptyData>
      )}
      ItemSeparatorComponent={(<RankingSeparator />)}
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
