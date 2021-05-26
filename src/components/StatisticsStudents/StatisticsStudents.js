import React from 'react';

import {
  TableWrapper,
  TableHead,
  Tr,
  Th,
  TableBody,
  Td,
  MobileWrapper,
  MobileTitle,
  MobileText,
} from './StatisticsStudentsStyle';

const StatisticsStudents = ({ NameSurname, EmailAdress, Participations }) => {
  return (
    <>
      <MobileWrapper>
        <MobileTitle>Ime i prezime:</MobileTitle>
        <MobileText>Pero Perić</MobileText>
        <MobileTitle>Email adresa:</MobileTitle>
        <MobileText>Pero@gmail.com</MobileText>
        <MobileTitle>Broj sudjelovanja:</MobileTitle>
        <MobileText>47</MobileText>
      </MobileWrapper>

      <TableWrapper>
        <TableHead>
          <Tr>
            <Th>Ime i prezime</Th>
            <Th>Email adresa</Th>
            <Th>Broj sudjelovanja</Th>
          </Tr>
        </TableHead>
        <TableBody>
          <Tr>
            <Td>Pero Perić</Td>
            <Td>Pero@gmail.com</Td>
            <Td>47</Td>
          </Tr>
        </TableBody>
      </TableWrapper>
    </>
  );
};

export default StatisticsStudents;
