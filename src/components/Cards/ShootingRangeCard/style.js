import styled from 'styled-components/native';

const ShootingRangeCard = styled.TouchableOpacity`
  background: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  elevation: 2;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 4px;
`;

const Title = styled.Text`
  color: #ff0066;
  font-size: 16px;
  text-transform: capitalize;
  font-family: 'Exo2_600SemiBold';
`;

const DateLabel = styled.Text`
  color: #cacaca;
  font-size: 14px;
  font-family: 'Exo2_500Medium';
`;

const Date = styled.Text`
  color: #cacaca;
  font-size: 14px;
  font-family: 'Exo2_300Light';
`;

const Place = styled.Text`
  color: #cacaca;
  font-size: 14px;
  font-family: 'Exo2_200ExtraLight';
`;

const Online = styled.Text`
  color: #42d2b2;
  text-align: right;
  font-weight: bold;
`;

const Offline = styled.Text`
  color: #F03A5F;
  text-align: right;
  font-weight: bold;
`;

const S = {
  ShootingRangeCard,
  Title,
  DateLabel,
  Date,
  Place,
  Online,
  Offline
};

export { S };
