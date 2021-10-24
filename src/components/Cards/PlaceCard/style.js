import styled from 'styled-components/native';

const PlaceCard = styled.TouchableOpacity`
  background: ${props => props.disabled ? '#f2f2f2' : '#ffff' };
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  elevation: ${props => props.disabled ? 0 : 2 };
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 4px;
`;

const Name = styled.Text`
  color: #ff0066;
  font-size: 16px;
  text-transform: capitalize;
  font-family: 'Exo2_600SemiBold';
`;

const S = {
  PlaceCard,
  Name,
};

export { S };
