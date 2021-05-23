import styled from 'styled-components/native';

const Separator = styled.View`
  height: ${(props) => props.height && props.height};
  width: 100%;
  background: #ffffff;
  padding-right: ${(props) =>
    props.paddingHorizontal ? props.paddingHorizontal : 0};
  padding-left: ${(props) =>
    props.paddingHorizontal ? props.paddingHorizontal : 0};
  padding-top: ${(props) =>
    props.paddingVertical ? props.paddingVertical : 0};
  padding-bottom: ${(props) =>
    props.paddingVertical ? props.paddingVertical : 0};
`;

const S = {
  Separator,
};

export { S };
