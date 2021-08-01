import styled from 'styled-components/native';

const Separator = styled.View`
  height: ${(props) => (props.height ? `${props.height}px` : '1px')};
  width: 100%;
  background: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor}` : 'transparent'};
  padding-right: ${(props) =>
    props.paddingHorizontal ? `${props.paddingHorizontal}px` : '0px'};
  padding-left: ${(props) =>
    props.paddingHorizontal ? `${props.paddingHorizontal}px` : '0px'};
  padding-top: ${(props) =>
    props.paddingVertical ? `${props.paddingVertical}px` : '0px'};
  padding-bottom: ${(props) =>
    props.paddingVertical ? `${props.paddingVertical}px` : '0px'};
  margin-bottom: ${(props) =>
    props.marginVertical ? `${props.marginVertical}px` : '0px'};
  margin-top: ${(props) =>
    props.marginVertical ? `${props.marginVertical}px` : '0px'};
`;

const S = {
  Separator,
};

export { S };
