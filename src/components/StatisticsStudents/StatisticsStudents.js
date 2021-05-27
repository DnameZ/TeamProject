import React from 'react';
import { BsArrowUpDown } from 'react-icons/bs';
import {
  TableWrapper,
  TableHead,
  Tr,
  Th,
  TableBody,
  Td,
  Hr,
  MobileWrapper,
  MobileTitle,
  MobileText,
} from './StatisticsStudentsStyle';

const StatisticsStudents = ({ nameSurname, emailAdress, participations }) => {
  return (
    <>
      <MobileWrapper>
        <MobileTitle>Ime i prezime:</MobileTitle>
        <MobileText>dasdsa</MobileText>
        <MobileTitle>Email adresa:</MobileTitle>
        <MobileText>sadsa</MobileText>
        <MobileTitle>Broj sudjelovanja:</MobileTitle>
        <MobileText>dsadsa</MobileText>
      </MobileWrapper>
      <MobileWrapper>
        <MobileTitle>Ime i prezime:</MobileTitle>
        <MobileText>dasdsa</MobileText>
        <MobileTitle>Email adresa:</MobileTitle>
        <MobileText>sadsa</MobileText>
        <MobileTitle>Broj sudjelovanja:</MobileTitle>
        <MobileText>dsadsa</MobileText>
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
            <Td>dasdsa</Td>
            <Td>sadsa</Td>
            <Td>dsadsa</Td>
          </Tr>
          <Hr />
          <Tr>
            <Td>dasdsa</Td>
            <Td>sadsa</Td>
            <Td>dsadsa</Td>
          </Tr>
        </TableBody>
      </TableWrapper>
    </>
  );
};

export default StatisticsStudents;
