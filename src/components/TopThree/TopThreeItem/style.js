import styled from 'styled-components/native';

const TopThreeItem = styled.View`
  justify-content: center;
  align-items: center;
`;

const Crown = styled.Image`
  position: absolute;
  top: -35px;
  left: -20px;
  transform: rotate(-12deg);
  z-index: 1;
`;


const Name = styled.Text`
  color: #FF0066;
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
  Name
};

export { S };
