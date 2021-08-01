import styled from 'styled-components/native';

const Header = styled.View`
  justify-content: center;
  align-items: center;
  height: 30%;
`;

const Body = styled.View`
  justify-content: center;
  height: 40%;
`;

const Footer = styled.View`
  justify-content: center;
  align-items: center;
  height: 30%;
`;

const ShootingRange = styled.Text`
  font-family: 'Exo2_900Black_Italic';
  color: #ff0066;
  font-size: 25px;
  text-transform: capitalize;
`;

const Type = styled.Text`
  font-family: 'Exo2_500Medium';
  color: #cacaca;
  font-size: 20px;
  text-transform: capitalize;
`;

const Statistics = styled.Text`
  font-family: 'Exo2_500Medium';
  color: #cacaca;
  font-size: 20px;
  text-transform: capitalize;
`;

const SensorEquipment = styled.Text`
  font-family: 'Exo2_500Medium';
  color: #cacaca;
  font-size: 20px;
  text-transform: capitalize;
`;


const S = {
  Header,
  Body,
  Footer,
  ShootingRange,
  Type,
  Statistics,
  SensorEquipment
};

export { S };
