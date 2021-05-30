import React from 'react';
import SortImageStudents from '../../assets/images/sort-icon-2.png';
import {
  TableWrapper,
  TableHead,
  Tr,
  Th,
  SortIconStudents,
  TableBody,
  Td,
  MobileWrapper,
  MobileTitle,
  MobileText,
} from './StatisticsStudentsStyle';

const StatisticsStudents = ({ nameSurname, emailAdress, participations }) => {
  return (
    <>
      <MobileWrapper>
        <MobileTitle>Ime i prezime:</MobileTitle>
        <MobileText>{nameSurname}</MobileText>
        <MobileTitle>Email adresa:</MobileTitle>
        <MobileText>{emailAdress}</MobileText>
        <MobileTitle>Broj sudjelovanja:</MobileTitle>
        <MobileText>{participations}</MobileText>
      </MobileWrapper>

      <TableWrapper>
        <TableHead>
          <Tr>
            <Th>Ime i prezime</Th>
            <Th>Email adresa</Th>
            <Th>
              Broj sudjelovanja
              <SortIconStudents src={SortImageStudents} alt="Sort Icon" />
            </Th>
          </Tr>
        </TableHead>
        <TableBody>
          <Tr>
            <Td>{nameSurname}</Td>
            <Td>{emailAdress}</Td>
            <Td>{participations}</Td>
          </Tr>
        </TableBody>
      </TableWrapper>
    </>
  );
};

export default StatisticsStudents;
