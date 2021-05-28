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
  ModalFooter,
} from './ModalStyle';

// assets
import CloseIcon from '../../assets/images/closeIcon.svg';

const Modal = (props) => {
  return (
    <>
      <ModalBackground />
      <ModalWrapper className="JelMeJebes">
        <ModalHeader>
          <ModalTitle>{props.title}</ModalTitle>
          <IconWrapper>
            <Icon src={CloseIcon} onClick={props.handleModalClose} />
          </IconWrapper>
        </ModalHeader>
        <ModalContent>{props.children}</ModalContent>
        {props.avgGrade ? (
          <ModalFooter>
            Prosječna ocjena za ovo predavanje je <b>{props.avgGrade}</b>
          </ModalFooter>
        ) : null}
      </ModalWrapper>
    </>
  );
};

export default Modal;
