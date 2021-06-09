import React, { useState, useEffect } from 'react';
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
import SortModal from '../../components/SortModal/SortModal';

const StatisticsStudents = ({ nameSurname, emailAdress, participations }) => {
  const [showSortModalEvents, setShowSortModalEvents] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setShowSortModalEvents(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const students = [
    {
      nameSurname: 'Ivan Horvat',
      emailAdress: 'ivan.horvat@gmail.com',
      participations: 34,
    },
    {
      nameSurname: 'Ivan Horvat',
      emailAdress: 'ivan.horvat@gmail.com',
      participations: 23,
    },
    {
      nameSurname: 'Ivan Horvat',
      emailAdress: 'ivan.horvat@gmail.com',
      participations: 22,
    },
    {
      nameSurname: 'Ivan Horvat',
      emailAdress: 'ivan.horvat@gmail.com',
      participations: 4,
    },
    {
      nameSurname: 'Ivan Horvat',
      emailAdress: 'ivan.horvat@gmail.com',
      participations: 34,
    },
    {
      nameSurname: 'Ivan Horvat',
      emailAdress: 'ivan.horvat@gmail.com',
      participations: 23,
    },
    {
      nameSurname: 'Ivan Horvat',
      emailAdress: 'ivan.horvat@gmail.com',
      participations: 22,
    },
    {
      nameSurname: 'Ivan Horvat',
      emailAdress: 'ivan.horvat@gmail.com',
      participations: 4,
    },
  ];
  return (
    <>
      <SortModal
        content1="Defaultno"
        content2="Po broju sudjelovanja"
        type="students"
        position="participations"
        showSortModalEvents={showSortModalEvents}
      />
      {students.map((studentsInfo, index) => (
        <MobileWrapper key={index}>
          <MobileTitle>Ime i prezime:</MobileTitle>
          <MobileText>{studentsInfo.nameSurname}</MobileText>
          <MobileTitle>Email adresa:</MobileTitle>
          <MobileText>{studentsInfo.emailAdress}</MobileText>
          <MobileTitle>Broj sudjelovanja:</MobileTitle>
          <MobileText>{studentsInfo.participations}</MobileText>
        </MobileWrapper>
      ))}
      <TableWrapper>
        <TableHead>
          <Tr>
            <Th>Ime i prezime</Th>
            <Th>Email adresa</Th>
            <Th>
              Broj sudjelovanja
              <SortIconStudents
                onClick={() => setShowSortModalEvents(true)}
                src={SortImageStudents}
                alt="Sort Icon"
              />
            </Th>
          </Tr>
        </TableHead>
        {students.map((studentsInfo, index) => (
          <TableBody key={index}>
            <Tr>
              <Td>{studentsInfo.nameSurname}</Td>
              <Td>{studentsInfo.emailAdress}</Td>
              <Td>{studentsInfo.participations}</Td>
            </Tr>
          </TableBody>
        ))}
      </TableWrapper>
    </>
  );
};

export default StatisticsStudents;
