import React, { useState } from 'react';
import { BsChevronExpand, BsChevronContract } from 'react-icons/bs';
import StudentRecord from '../StudentRecord/StudentRecord';
import Rate from '../RateEventModal/RateEventModal';

// style
import {
  EventCard as EventCardWrapper,
  EventCardHeader,
  EventCardTitle,
  EventCardIcon,
  EventCardContent,
  ContentRow,
  ContentRowShow,
  ContentRowShowDesktop,
  RowTitle,
  RowValue,
  ButtonWrapper,
} from './EventCardStyle';

import { PrimaryButton } from '../../lib/styles/generalStyles';
import { registerForEvent } from '../../api/event';

const EventCard = ({
  title,
  location,
  date,
  time,
  freeSpots,
  company,
  shortDescription,
  buttonText,
  id,
}) => {
  const [showDescription, setShowDescrption] = useState(false);
  const [Modal, setModal] = useState(false);
  const authToken = localStorage.getItem('authToken');
  const Evidentiraj = 'Evidentiraj';
  const Ocijeni = 'Ocijeni';
  const PrijaviSe = 'Prijavi se';

  const OpenModal = () => {
    setModal((Modal) => !Modal);
  };
  const SetModal = (buttonText) => {
    switch (buttonText) {
      case Evidentiraj:
        return <StudentRecord handleModalClose={OpenModal} />;
      case Ocijeni:
        return <Rate handleModalClose={OpenModal} />;
      case PrijaviSe:
        registerForEvent(id, authToken);
        break;
      default:
        console.log('Nothing');
    }
  };

  return (
    <>
      {Modal === true && SetModal(buttonText)}
      <EventCardWrapper>
        <EventCardHeader>
          <EventCardTitle>{title}</EventCardTitle>
          <EventCardIcon>
            {showDescription ? (
              <BsChevronContract
                size={18}
                color={'#333333'}
                onClick={() => setShowDescrption(!showDescription)}
              />
            ) : (
              <BsChevronExpand
                size={18}
                color={'#333333'}
                onClick={() => setShowDescrption(!showDescription)}
              />
            )}
          </EventCardIcon>
        </EventCardHeader>

        <EventCardContent>
          <ContentRow>
            <RowTitle>Lokacija</RowTitle>
            <RowValue>{location}</RowValue>
          </ContentRow>

          <ContentRow>
            <RowTitle>Datum i vrijeme</RowTitle>
            <RowValue>{date}</RowValue>
            <RowValue>{time}</RowValue>
          </ContentRow>

          <ContentRow>
            <RowTitle>Slobodna mjesta</RowTitle>
            <RowValue>{freeSpots}</RowValue>
          </ContentRow>

          <ContentRow>
            <RowTitle>Firma</RowTitle>
            <RowValue>{company}</RowValue>
          </ContentRow>

          <ContentRowShowDesktop>
            <RowTitle>Kratki opis</RowTitle>
            <RowValue>{shortDescription}</RowValue>
          </ContentRowShowDesktop>

          {showDescription && (
            <ContentRowShow>
              <RowTitle>Kratki opis</RowTitle>
              <RowValue>{shortDescription}</RowValue>
            </ContentRowShow>
          )}
        </EventCardContent>
        <ButtonWrapper>
          <PrimaryButton
            type="modal/card"
            text={buttonText}
            onClick={() => OpenModal(buttonText)}
          />
        </ButtonWrapper>
      </EventCardWrapper>
    </>
  );
};

export default EventCard;
