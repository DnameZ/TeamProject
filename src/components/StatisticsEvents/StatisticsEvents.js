import React, { useState, useEffect, useContext } from 'react';
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
import { getAllEvents } from '../../api/event';
import { AuthContext } from '../../context/AuthContext';
const StatisticsEvents = () => {
  const [show, setShow] = useState(false);
  const [showSortModalEvents, setShowSortModalEvents] = useState(
    'modal-one' | 'modal-two',
  );
  const [events, setEvents] = useState([]);
  const { authToken } = useContext(AuthContext);

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

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  // }, []);

  useEffect(() => {
    handleResize();
    getAllEvents(authToken).then((result) => {
      setEvents(result);
    });
  });
  return (
    <>
      <SortModal
        content1="Kronološki"
        content2="Abecedno uzlazno"
        content3="Abecedno silazno"
        position="eventsAZ"
        showSortModalEvents={showSortModalEvents === 'modal-one'}
      />
      <SortModal
        content1="Defaultno"
        content2="Po prosječnoj ocjeni"
        type="students"
        position="avgGrade"
        showSortModalEvents={showSortModalEvents === 'modal-two'}
      />
      <CommentList handleClose={() => setShow(false)} show={show} />
      {events.map((event) => (
        <MobileWrapper key={event.id}>
          <MobileTitle>Naziv događaja:</MobileTitle>
          <MobileText>{event.name}</MobileText>
          <MobileTitle>Prosječna ocjena:</MobileTitle>
          <MobileText>4,7</MobileText>
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
        {events.map((event) => (
          <TableBody key={event.id}>
            <Tr>
              <Td>{event.name}</Td>
              <Td>4.7</Td>
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
