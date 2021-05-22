import styled from 'styled-components/native';

const ViewContainer = styled.View`
  width: 100%;
  background: blue;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  align-items: ${(props) => (props.align ? props.align : 'center')};
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};
`;

export { ViewContainer };
