import React, { useState, useEffect } from 'react';
import SortAZImage from '../../assets/images/sort-icon-1.png';
import SortImage from '../../assets/images/sort-icon-2.png';
import {
  TableWrapper,
  TableHead,
  Tr,
  Th,
  SortIconAZ,
  SortIcon,
  TableBody,
  Td,
  TdComments,
  MobileWrapper,
  MobileTitle,
  MobileText,
  MobileTextCommentar,
} from './StatisticsEventsStyle';

import CommentList from '../CommentList/CommentList';
import SortModal from '../../components/SortModal/SortModal';
const StatisticsEvents = (events) => {
  const [show, setShow] = useState(false);
  const [event, setEvent] = useState(events.events);
  const [initialEvents, setInitialEvents] = useState(event);
  const [showSortModalEvents, setShowSortModalEvents] = useState(
    'modal-one' | 'modal-two',
  );

  const handleShowModalOne = () => {
    setShowSortModalEvents('modal-one');
  };

  const handleShowModalTwo = () => {
    setShowSortModalEvents('modal-two');
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setShowSortModalEvents(!'modal-one' || !'modal-two');
    }
  };

  useEffect(() => {
    handleResize();
  });

  useEffect(() => {
    setEvent(events.events);
  }, [events]);

  // sort
  const compareA = (a, b) => {
    const eventA = a.title.toUpperCase();
    const eventB = b.title.toUpperCase();

    if (eventA < eventB) {
      return -1;
    }
    if (eventA > eventB) {
      return 1;
    }
    return 0;
  };

  const compareB = (a, b) => {
    const eventA = a.title.toUpperCase();
    const eventB = b.title.toUpperCase();

    if (eventA < eventB) {
      return 1;
    }
    if (eventA > eventB) {
      return -1;
    }
    return 0;
  };

  const compareC = (a, b) => {
    if (new Date(a.date) > new Date(b.date)) {
      return 1;
    }
    if (new Date(a.date) < new Date(b.date)) {
      return -1;
    }
    return 0;
  };

  const compareByGrade = (a, b) => {
    if (a.avgGrade > b.avgGrade) {
      return -1;
    }
    if (a.avgGrade < b.avgGrade) {
      return 1;
    }
    return 0;
  };

  const sortDefault = () => {
    setEvent(initialEvents);
    setShowSortModalEvents(false);
  };

  const sortByGrade = () => {
    let dataToSort = [...event].sort(compareByGrade);
    setEvent(dataToSort);
    setShowSortModalEvents(false);
  };

  const sortChronologically = () => {
    let dataToSort = [...event].sort(compareC);
    console.log(dataToSort);
    setEvent(dataToSort);
    setShowSortModalEvents(false);
  };

  const sortDescending = () => {
    let dataToSort = [...event].sort(compareB);
    setEvent(dataToSort);
    setShowSortModalEvents(false);
  };

  const sortAscending = () => {
    let dataToSort = [...event].sort(compareA);
    setEvent(dataToSort);
    setShowSortModalEvents(false);
  };

  return (
    <>
      <SortModal
        content1="Kronološki"
        content2="Abecedno uzlazno"
        content3="Abecedno silazno"
        position="eventsAZ"
        sortMethod1={() => sortChronologically()}
        sortMethod2={() => sortAscending()}
        sortMethod3={() => sortDescending()}
        showSortModalEvents={showSortModalEvents === 'modal-one'}
      />
      <SortModal
        content1="Defaultno"
        content2="Po prosječnoj ocjeni"
        type="students"
        position="avgGrade"
        sortMethod1={() => sortDefault()}
        sortMethod2={() => sortByGrade()}
        showSortModalEvents={showSortModalEvents === 'modal-two'}
      />
      <CommentList handleClose={() => setShow(false)} show={show} />
      {event.map((event) => (
        <MobileWrapper key={event.id}>
          <MobileTitle>Naziv događaja:</MobileTitle>
          <MobileText>{event.title}</MobileText>
          <MobileTitle>Prosječna ocjena:</MobileTitle>
          <MobileText>{event.avgGrade}</MobileText>
          <MobileTitle>Komentari:</MobileTitle>
          <MobileTextCommentar onClick={() => setShow(true)}>
            Pogledaj komentare
          </MobileTextCommentar>
        </MobileWrapper>
      ))}
      ;
      <TableWrapper>
        <TableHead>
          <Tr>
            <Th>
              Naziv događaja
              <SortIconAZ
                onClick={handleShowModalOne}
                src={SortAZImage}
                alt="Sort Icon AZ"
              />
            </Th>
            <Th>
              Prosječna ocjena
              <SortIcon
                onClick={handleShowModalTwo}
                src={SortImage}
                alt="Sort Icon"
              />
            </Th>
            <Th>Komentari</Th>
          </Tr>
        </TableHead>
        {event.map((event) => (
          <TableBody key={event.id}>
            <Tr>
              <Td>{event.title}</Td>
              <Td>{event.avgGrade}</Td>
              <TdComments onClick={() => setShow(true)}>
                Pogledaj komentare
              </TdComments>
            </Tr>
          </TableBody>
        ))}
      </TableWrapper>
    </>
  );
};

export default StatisticsEvents;
