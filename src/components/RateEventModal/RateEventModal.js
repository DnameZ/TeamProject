import React, { useState } from 'react';

// components
import Modal from '../Modal/Modal';
import { PrimaryButton } from '../../lib/styles/generalStyles';
import { rateEvent } from '../../api/event';

// style
import {
  ContentWrapper,
  ContentRow,
  RowTitle,
  RowParagraph,
  RowGrades,
  Grade,
  ButtonWrapper,
} from './RateEventModalStyle';

import { TextArea } from '../../lib/styles/generalStyles';

const RateEventModal = (props) => {
  const [selectedGrade, setSelectedGrade] = useState(0);
  const [value, setValue] = useState('');

  const review = { comment: value, rating: selectedGrade };
  const id = '153f16cb-48f9-4293-aff9-3436d9d0417c';

  const SendData = () => {
    const authToken = localStorage.getItem('authToken');
    rateEvent(review, id, authToken);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Modal title="Ocijeni događaj" handleModalClose={props.handleModalClose}>
      <ContentWrapper>
        <ContentRow>
          <RowTitle>Ime događaja:</RowTitle>
          <RowParagraph>{props.eventName}</RowParagraph>
        </ContentRow>

        <ContentRow>
          <RowTitle>Komentar:</RowTitle>
          <TextArea value={value} onChange={handleChange}></TextArea>
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
        <ButtonWrapper>
          <PrimaryButton
            onClick={SendData}
            type="modal/card"
            text="Pošalji ocjenu"
          />
        </ButtonWrapper>
      </ContentWrapper>
    </Modal>
  );
};

export default RateEventModal;
