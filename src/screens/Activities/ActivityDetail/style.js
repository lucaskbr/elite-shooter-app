import styled from 'styled-components/native';

const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

const Modality = styled.Text`
  font-family: 'Exo2_900Black_Italic';
  color: #FF0066;
  font-size: 25px;
`;

const Date = styled.Text`
  font-family: 'Exo2_500Medium';
  color: #CACACA;
  font-size: 18px;
`;

const Place = styled.Text`
  font-family: 'Exo2_300Light';
  color: #CACACA;
  font-size: 18px;
`;

const TargetInfo = styled.View`
  align-items: center;
`;

const ShotsTitle = styled.Text`
  font-size: 26px;
  font-family: 'Exo2_700Bold_Italic';
`;

const ShotsCount = styled.Text`
  font-size: 26px;
  color: #ff0066;
  font-family: 'Exo2_700Bold_Italic';
`;

const Target = styled.Image`
  height: 300px;
  width: 100%;
  margin-bottom: 30px;
`;

const Results = styled.View`
  width: 100%;
  align-items: flex-start;
`;

const S = {
  Header,
  TargetInfo,
  ShotsTitle,
  Place,
  Target,
  ShotsCount,
  Results,
  Date,
  Modality
};

export { S };
