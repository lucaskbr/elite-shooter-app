import styled from 'styled-components/native';

const RankingList = styled.FlatList`
  background: #fff;
  border: 1px solid #d8d7d7;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 0;
`;

const EmptyData = styled.View`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const S = {
  RankingList,
  EmptyData,
};

export { S };
