import React, { useState, useRef } from 'react';
import { Text, TouchableHighlight } from 'react-native';

import Modal from 'react-native-modal';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';

import { Button } from '../../../../components';

import { S } from './style';

const FilterModal = (props) => {

  const { isVisible, onChange } = props;

  const [isTrainingChecked, setIsTrainingChecked] = useState(true);
  const [isCompetitionChecked, setIsCompetitionChecked] = useState(true);
  const [month, setMonth] = useState('selecione');

  return (
    <Modal isVisible={isVisible} onBackdropPress={() => onChange && onChange()} paddingHorizontal={15}>
      <S.ModalContainer>
        <S.Title>Filtrar atividades</S.Title>
        <S.InputsContainer>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => setIsTrainingChecked(prevState => !prevState)}
          >
            <S.CheckboxContainer>
              <CheckBox
                tintColors={{
                  true: "#FF0066"
                }}
                value={isTrainingChecked}
                onValueChange={(newValue) => setIsTrainingChecked(newValue)}
              />
              <Text>Treinos</Text>
            </S.CheckboxContainer>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => setIsCompetitionChecked(prevState => !prevState)}
          >
            <S.CheckboxContainer>
              <CheckBox
                tintColors={{
                  true: "#FF0066"
                }}
                value={isCompetitionChecked}
                onValueChange={(newValue) => setIsCompetitionChecked(newValue)}
              />
              <Text>Competições</Text>
            </S.CheckboxContainer>
          </TouchableHighlight>

          <S.InputWrapper>
            <S.SelectLabel>Selecionar ano:</S.SelectLabel>
            <S.SelectContainer>
              <Picker
                style={{
                  width: '100%',
                  zIndex: 1,
                  flex: 1
                }}
                selectedValue="2021"
                >
                <Picker.Item label="2021" value="2021" />
              </Picker>
            </S.SelectContainer>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.SelectLabel>Selecionar meses:</S.SelectLabel>
            <S.SelectContainer>
              
              <Picker
                style={{
                  width: '100%',
                  zIndex: 1,
                  flex: 1
                }}
                selectedValue=""
                onValueChange={(value) => setMonth(value)}
                >
                <Picker.Item label="Todos os meses" value="" />
                <Picker.Item label="Janeiro" value="Janeiro" />
                <Picker.Item label="Fevereiro" value="Fevereiro" />
                <Picker.Item label="Março" value="Março" />
                <Picker.Item label="Abril" value="Abril" />
                <Picker.Item label="Maio" value="Maio" />
                <Picker.Item label="Junho" value="Junho" />
                <Picker.Item label="Julho" value="Julho" />
                <Picker.Item label="Agosto" value="Agosto" />
                <Picker.Item label="Setembro" value="Setembro" />
                <Picker.Item label="Outubro" value="Outubro" />
                <Picker.Item label="Novembro" value="Novembro" />
                <Picker.Item label="Dezembro" value="Dezembro" />
              </Picker>
            </S.SelectContainer>
          </S.InputWrapper>
        </S.InputsContainer>
        <Button text="Aplicar filtro" onPress={() => onChange && onChange()} />
      </S.ModalContainer>
    </Modal>
  );
};

export { FilterModal };
