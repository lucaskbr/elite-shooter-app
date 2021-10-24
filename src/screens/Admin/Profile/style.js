import styled from 'styled-components/native';

const Dashboard = styled.View`
  width: 100%;
`;

const DashboardRow = styled.View`
  width: 100%;
  flex-direction: row;
`;

const DashboardItem = styled.View`
  flex: 0.5;
  width: 100%;
  margin: 4px;
`;

const Ps = styled.Text`
  font-size: 12px;
  font-family: 'Exo2_300Light';
`;

const S = {
  Dashboard,
  DashboardRow,
  DashboardItem,
  Ps
};

export { S };
