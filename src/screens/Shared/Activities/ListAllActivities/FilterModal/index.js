import React, { useState, useRef } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import Modal from 'react-native-modal';
import Checkbox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';

import { Button, Separator } from '@components';

import { S } from './style';

const FilterModal = (props) => {
  const { isVisible, onChange } = props;

  const [isTrainingChecked, setIsTrainingChecked] = useState(true);
  const [isCompetitionChecked, setIsCompetitionChecked] = useState(true);
  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState(undefined);

  const handleApplyFilters = () => {
    const modality = [];
    
    isTrainingChecked && modality.push('training');
    isCompetitionChecked && modality.push('competition');

    return {
      modality,
      month,
      year,
    };
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => onChange && onChange()}
      paddingHorizontal={15}
    >
      <S.ModalContainer>
        <S.Title>Filtrar atividades</S.Title>
        <S.InputsContainer>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => setIsTrainingChecked((prevState) => !prevState)}
          >
            <S.CheckboxContainer>
              <Checkbox
                color={isTrainingChecked ? '#FF0066' : undefined}
                value={isTrainingChecked}
                onValueChange={(newValue) => setIsTrainingChecked(newValue)}
              />
              <Text
                style={{
                  marginLeft: 10,
                }}>
                Treinos
                </Text>
            </S.CheckboxContainer>
          </TouchableHighlight>
          <Separator height={10} />
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => setIsCompetitionChecked((prevState) => !prevState)}
          >
            <S.CheckboxContainer>
              <Checkbox
                color={isCompetitionChecked ? '#FF0066' : undefined}
                value={isCompetitionChecked}
                onValueChange={(newValue) => setIsCompetitionChecked(newValue)}
              />
              <Text
                style={{
                  marginLeft: 10,
                }}
              >
                Competições
              </Text>
            </S.CheckboxContainer>
          </TouchableHighlight>

          <S.InputWrapper>
            <S.SelectLabel>Selecionar ano:</S.SelectLabel>
            <S.SelectContainer>
              <Picker
                style={{
                  width: '100%',
                  zIndex: 1,
                  flex: 1,
                }}
                selectedValue={year}
                onValueChange={(value) => setYear(value)}
              >
                <Picker.Item label="2021" value={2021} />
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
                  flex: 1,
                }}
                selectedValue={month}
                onValueChange={(value) => setMonth(value)}
              >
                <Picker.Item label="Todos os meses" value="" />
                <Picker.Item label="Janeiro" value={1} />
                <Picker.Item label="Fevereiro" value={2} />
                <Picker.Item label="Março" value={3} />
                <Picker.Item label="Abril" value={4} />
                <Picker.Item label="Maio" value={5} />
                <Picker.Item label="Junho" value={6} />
                <Picker.Item label="Julho" value={7} />
                <Picker.Item label="Agosto" value={8} />
                <Picker.Item label="Setembro" value={9} />
                <Picker.Item label="Outubro" value={10} />
                <Picker.Item label="Novembro" value={11} />
                <Picker.Item label="Dezembro" value={12} />
              </Picker>
            </S.SelectContainer>
          </S.InputWrapper>
        </S.InputsContainer>
        <Button
          text="Aplicar filtro"
          onPress={() => onChange && onChange(handleApplyFilters())}
        />
      </S.ModalContainer>
    </Modal>
  );
};

export { FilterModal };
