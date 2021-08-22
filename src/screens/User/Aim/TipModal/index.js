import React from 'react';
import Modal from 'react-native-modal';

import tip1Path from '@assets/tip-01.jpeg';
import tip2Path from '@assets/tip-02.jpeg';
import tip3Path from '@assets/tip-03.jpeg';

import { Button, InputGroup, Label, TextInput } from '@components';

import { S } from './style';

const TipModal = (props) => {
  const { isVisible, onChange } = props;

  const handleImg = () => {
    const result = Math.floor(Math.random() * 3);

    if (result <= 0) {
      return tip1Path;
    }

    if (result === 1) {
      return tip2Path;
    }

    return tip3Path;
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={() => onChange && onChange()}>
      <S.ModalContainer>
        <S.Title>Oops, vai uma dica ai?</S.Title>
        <S.TipsContainer>
          <S.TipPic source={handleImg()} />
        </S.TipsContainer>
        <Button text="Tudo certo!" onPress={() => onChange && onChange()} />
      </S.ModalContainer>
    </Modal>
  );
};

export { TipModal };
