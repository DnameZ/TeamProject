import React, { useState } from 'react';

// components
import Modal from '../Modal/Modal';
import { PrimaryButton } from '../../lib/styles/generalStyles';

// style
import {
  ContentWrapper,
  ContentRow,
  RowTitle,
  RowParagraph,
  RowGrades,
  Grade,
} from './RateEventModalStyle';

import { TextArea } from '../../lib/styles/generalStyles';

const RateEventModal = (props, handleModalClose) => {
  const [selectedGrade, setSelectedGrade] = useState(0);

  return (
    <Modal title="Ocijeni događaj" handleModalClose={handleModalClose}>
      <ContentWrapper>
        <ContentRow>
          <RowTitle>Ime događaja:</RowTitle>
          <RowParagraph>{props.eventName}</RowParagraph>
        </ContentRow>

        <ContentRow>
          <RowTitle>Komentar:</RowTitle>
          <TextArea></TextArea>
        </ContentRow>

        <ContentRow>
          <RowTitle>Ocijeni događaj:</RowTitle>
          <RowGrades>
            <Grade
              selectedGrade={selectedGrade === 1}
              onClick={() => setSelectedGrade(1)}>
              1
            </Grade>
            <Grade
              selectedGrade={selectedGrade === 2}
              onClick={() => setSelectedGrade(2)}>
              2
            </Grade>
            <Grade
              selectedGrade={selectedGrade === 3}
              onClick={() => setSelectedGrade(3)}>
              3
            </Grade>
            <Grade
              selectedGrade={selectedGrade === 4}
              onClick={() => setSelectedGrade(4)}>
              4
            </Grade>
            <Grade
              selectedGrade={selectedGrade === 5}
              onClick={() => setSelectedGrade(5)}>
              5
            </Grade>
          </RowGrades>
        </ContentRow>
        <PrimaryButton type="modal/card" text="Pošalji ocjenu" />
      </ContentWrapper>
    </Modal>
  );
};

export default RateEventModal;
