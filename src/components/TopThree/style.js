import styled from 'styled-components/native';

const TopThree = styled.View`
  padding-top: 50px;
`;

const FirstRow = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SecondRow = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
`;

const S = {
  TopThree,
  FirstRow,
  SecondRow
};

export { S };
