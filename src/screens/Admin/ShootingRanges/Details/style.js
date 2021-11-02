import styled from 'styled-components/native';

const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

const Body = styled.View`
  justify-content: center;
`;

const Footer = styled.View`
  justify-content: center;
  align-items: center;
`;

const ShootingRange = styled.Text`
  font-family: 'Exo2_900Black_Italic';
  color: #ff0066;
  font-size: 25px;
`;

const Type = styled.Text`
  font-family: 'Exo2_500Medium';
  color: #cacaca;
  font-size: 20px;
  text-transform: lowercase;
`;

const QRCodeView = styled.View`
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const PdfIcon = styled.TouchableOpacity`
  position: absolute;
  left: 70%;
  background: #FF0066;
  padding: 8px;
  border-radius: 50px;
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

const CurrentUser = styled.Text`
  font-family: 'Exo2_900Black_Italic';
  color: #1E4B78;
  font-size: 25px;
  text-transform: capitalize;
`;

const S = {
  Header,
  Body,
  Footer,
  ShootingRange,
  Type,
  Statistics,
  SensorEquipment,
  CurrentUser,
  QRCodeView,
  PdfIcon,
};

export { S };
