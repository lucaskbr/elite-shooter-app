import styled from 'styled-components/native';

const ScreenContainer = styled.View`
  height: 100%;
  width: 100%;
  background: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor}` : '#FFF'};
  padding-right: ${(props) =>
    props.paddingHorizontal ? `${props.paddingHorizontal}px` : '0px'};
  padding-left: ${(props) =>
    props.paddingHorizontal ? `${props.paddingHorizontal}px` : '0px'};
  padding-top: ${(props) =>
    props.paddingVertical ? `${props.paddingVertical}px` : '0px'};
  padding-bottom: ${(props) =>
    props.paddingVertical ? `${props.paddingVertical}px` : '0px'};
`;

const S = {
  ScreenContainer,
};

export { S };
