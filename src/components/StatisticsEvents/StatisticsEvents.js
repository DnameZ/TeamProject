import React from 'react';

import {
  TableWrapper,
  TableHead,
  Tr,
  Th,
  TableBody,
  Td,
  TdComments,
  MobileWrapper,
  MobileTitle,
  MobileText,
  MobileTextCommentar,
} from './StatisticsEventsStyle';

const StatisticsEvents = ({ EventsTitle, AverageRating }) => {
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
            <Th>Naziv događaja</Th>
            <Th>Prosječna ocjena</Th>
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
