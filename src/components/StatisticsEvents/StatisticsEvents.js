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
        <MobileText>Foi react, php, js, html, css</MobileText>
        <MobileTitle>Prosječna ocjena:</MobileTitle>
        <MobileText>4.7</MobileText>
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
            <Td>Foi react, php, js, html, css</Td>
            <Td>4.7</Td>
            <TdComments>Pogledaj komentare</TdComments>
          </Tr>
        </TableBody>
      </TableWrapper>
    </>
  );
};

export default StatisticsEvents;
