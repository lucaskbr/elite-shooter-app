import styled from 'styled-components/native';

const TopThreeItem = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

const Crown = styled.Image`
  position: absolute;
  top: -40px;
  left: -3%;
  transform: rotate(-15deg);
  z-index: 1;
  resize-mode: contain;
  height: 70px;
`;

const Name = styled.Text`
  color: #ff0066;
  font-size: 16px;
  font-family: 'Exo2_800ExtraBold';
  text-align: center;
  background: #fff;
  border: 1px solid transparent;
  border-radius: 7px;
  elevation: 2;
  padding: 2px 10px;
`;

const S = {
  TopThreeItem,
  Crown,
  Name,
};

export { S };
