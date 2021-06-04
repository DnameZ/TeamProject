import React, { useState } from 'react';
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
import eventsMock from '../../lib/mock/events';
import CommentList from '../CommentList/CommentList';

const StatisticsEvents = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <CommentList handleClose={() => setShow(false)} show={show} />
      {eventsMock.map((event) => (
        <MobileWrapper key={event.id}>
          <MobileTitle>Naziv događaja:</MobileTitle>
          <MobileText>{event.title}</MobileText>
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
              <SortIconAZ src={SortAZImage} alt="Sort Icon AZ" />
            </Th>
            <Th>
              Prosječna ocjena
              <SortIcon src={SortImage} alt="Sort Icon" />
            </Th>
            <Th>Komentari</Th>
          </Tr>
        </TableHead>
        {eventsMock.map((event) => (
          <TableBody key={event.id}>
            <Tr>
              <Td>{event.title}</Td>
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
