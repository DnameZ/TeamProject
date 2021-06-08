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
} from './RateEventModalStyle';

import { TextArea } from '../../lib/styles/generalStyles';

const RateEventModal = (props) => {
  const [selectedGrade, setSelectedGrade] = useState(0);
  const [value, setValue] = useState('');

  const review = { comment: value, rating: selectedGrade };
  const authToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlZTQzZDQ2MS1iOWI3LTRhNjctODA0Zi05NWIxMTBiZDZjZDciLCJ0aW1lIjoiMjAyMS0wNi0wOFQyMDo0NjowOC43NjNaIiwiaWF0IjoxNjIzMTg1MTY4fQ.IPMpWZPEmbnm0tIn2QPjxDfncsYD8ju_pkG6qa4jo1U';
  const id = '153f16cb-48f9-4293-aff9-3436d9d0417c';

  const SendData = () => {
    rateEvent(review, id, authToken);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Modal title="Ocijeni događaj">
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
        <PrimaryButton
          onClick={SendData}
          type="modal/card"
          text="Pošalji ocjenu"
        />
      </ContentWrapper>
    </Modal>
  );
};

export default RateEventModal;
