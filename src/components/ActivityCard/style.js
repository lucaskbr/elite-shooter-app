import styled from 'styled-components/native';

const ActivityCard = styled.TouchableOpacity`
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
  font-weight: bold;
  font-size: 16px;
  text-transform: capitalize;
  font-family: 'Exo2_600SemiBold';
`;

const DateLabel = styled.Text`
  color: #cacaca;
  font-weight: bold;
  font-size: 14px;
  font-family: 'Exo2_500Medium';
`;

const Date = styled.Text`
  color: #cacaca;
  font-size: 14px;
  font-weight: 300;
  font-family: 'Exo2_300Light';
`;

const Place = styled.Text`
  color: #cacaca;
  font-size: 14px;
  font-weight: 300;
  font-family: 'Exo2_200ExtraLight';
`;

const S = {
  ActivityCard,
  Title,
  DateLabel,
  Date,
  Place,
};

export { S };
