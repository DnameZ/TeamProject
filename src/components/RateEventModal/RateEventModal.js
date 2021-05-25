import React from 'react';

// components
import Modal from '../Modal/Modal';

// style
import {
  ContentWrapper,
  ContentRow,
  RowTitle,
  RowParagraph,
  RowGrades,
  Grade,
} from './RateEventModalStyle';

const RateEventModal = (props) => {
  return (
    <Modal title="Ocijeni događaj">
      <ContentWrapper>
        <ContentRow>
          <RowTitle>Ime događaja:</RowTitle>
          <RowParagraph>{props.eventName}</RowParagraph>
        </ContentRow>

        <ContentRow>
          <RowTitle>Komentar:</RowTitle>
        </ContentRow>

        <ContentRow>
          <RowTitle>Ocijeni događaj:</RowTitle>
          <RowGrades>
            <Grade>1</Grade>
            <Grade>2</Grade>
            <Grade>3</Grade>
            <Grade>4</Grade>
            <Grade>5</Grade>
          </RowGrades>
        </ContentRow>
      </ContentWrapper>
    </Modal>
  );
};

export default RateEventModal;
