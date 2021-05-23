import styled from 'styled-components/native';

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
  height: 400px;
  width: 100%;
  margin-bottom: 30px;
`;

const Results = styled.View`
  width: 100%;
  padding: 0 10%;
  align-items: flex-start;
`;

const S = {
  TargetInfo,
  ShotsTitle,
  Target,
  ShotsCount,
  Results,
};

export { S };
