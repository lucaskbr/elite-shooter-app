import styled from 'styled-components/native';

const ModalContainer = styled.View`
  flex: 0.5;
  background-color: #fff;
  border-radius: 10;
  justify-content: center;
  padding: 10px;
  justify-content: space-between;
`;

const InputsContainer = styled.View`
  align-items: flex-start;
`;

const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  text-align: center;
  color: #003366;
  font-size: 20px;
  font-family: 'Exo2_700Bold';
`;

const SelectContainer = styled.View`
  border: 1px solid #CACACA;
  width: 100%;
  height: 40;
`;

const SelectLabel = styled.Text`
  font-family: 'Exo2_700Bold';
  font-size: 16px;
  margin: 8px 0;
`;

const InputWrapper = styled.View`
  width: 100%;
`;

const S = {
  ModalContainer,
  CheckboxContainer,
  Title,
  SelectContainer,
  InputsContainer,
  SelectLabel,
  InputWrapper
};

export { S };
