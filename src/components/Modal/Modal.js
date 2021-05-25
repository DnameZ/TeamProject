import React from 'react';

// style
import {
  ModalBackground,
  ModalWrapper,
  ModalHeader,
  ModalContent,
  ModalTitle,
  IconWrapper,
  Icon,
} from './ModalStyle';

// assets
import CloseIcon from '../../assets/images/closeIcon.svg';

const Modal = (props) => {
  return (
    <>
      <ModalBackground />
      <ModalWrapper>
        <ModalHeader>
          <ModalTitle>{props.title}</ModalTitle>
          <IconWrapper>
            <Icon src={CloseIcon} />
          </IconWrapper>
        </ModalHeader>
        <ModalContent>{props.children}</ModalContent>
      </ModalWrapper>
    </>
  );
};

export default Modal;
