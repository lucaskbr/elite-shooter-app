import styled from 'styled-components/native';

const TopBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const EndActivity = styled.Text`
`;

const Online = styled.Text`
  color: #42d2b2;
  text-align: right;
  font-weight: bold;
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
  padding: 0 10%;
  align-items: flex-start;
`;

const S = {
  TopBar,
  EndActivity,
  TargetInfo,
  ShotsTitle,
  Target,
  ShotsCount,
  Results,
  Online,
};

export { S };
