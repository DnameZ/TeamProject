import React from 'react';
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

const StatisticsEvents = ({ eventsTitle, averageRating }) => {
  return (
    <>
      <MobileWrapper>
        <MobileTitle>Naziv događaja:</MobileTitle>
        <MobileText>{eventsTitle}</MobileText>
        <MobileTitle>Prosječna ocjena:</MobileTitle>
        <MobileText>{averageRating}</MobileText>
        <MobileTitle>Komentari:</MobileTitle>
        <MobileTextCommentar>Pogledaj komentare</MobileTextCommentar>
      </MobileWrapper>

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
        <TableBody>
          <Tr>
            <Td>{eventsTitle}</Td>
            <Td>{averageRating}</Td>
            <TdComments>Pogledaj komentare</TdComments>
          </Tr>
        </TableBody>
      </TableWrapper>
    </>
  );
};

export default StatisticsEvents;
