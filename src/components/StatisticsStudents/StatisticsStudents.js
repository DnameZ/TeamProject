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
import { users } from '../../lib/mock/statistics';

const StatisticsStudents = () => {
  const [showSortModalEvents, setShowSortModalEvents] = useState(false);
  const [students, setStudents] = useState(users);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setShowSortModalEvents(false);
    }
  };

  useEffect(() => {
    handleResize();
    console.log(students);
  }, [students]);

  // sort
  const compareA = (a, b) => {
    if (a.participations < b.participations) {
      return -1;
    }
    if (a.participations > b.participations) {
      return 1;
    }
    return 0;
  };

  const compareB = (a, b) => {
    if (a.participations < b.participations) {
      return 1;
    }
    if (a.participations > b.participations) {
      return -1;
    }
    return 0;
  };

  const sortDefault = () => {
    //  let sortedData = users.sort(compareA);
    setStudents(users);
  };

  const sortDescending = () => {
    let sortedData = students.sort(compareB);
    setStudents(sortedData);
    console.log(sortedData);
  };

  return (
    <>
      <SortModal
        content1="Defaultno"
        content2="Po broju sudjelovanja"
        type="students"
        position="participations"
        sortMethod1={sortDefault}
        sortMethod2={sortDescending}
        showSortModalEvents={showSortModalEvents}
      />

      {students.map(
        (studentsInfo) =>
          !studentsInfo.isAdmin && (
            <MobileWrapper key={studentsInfo.id}>
              <MobileTitle>Ime i prezime:</MobileTitle>
              <MobileText>
                {studentsInfo.firstName} {studentsInfo.lastName}
              </MobileText>
              <MobileTitle>Email adresa:</MobileTitle>
              <MobileText>{studentsInfo.email}</MobileText>
              <MobileTitle>Broj sudjelovanja:</MobileTitle>
              <MobileText>{studentsInfo.participations}</MobileText>
            </MobileWrapper>
          ),
      )}
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
        {students.map(
          (studentsInfo) =>
            !studentsInfo.isAdmin && (
              <TableBody key={studentsInfo.id}>
                <Tr>
                  <Td>
                    {studentsInfo.firstName} {studentsInfo.lastName}
                  </Td>
                  <Td>{studentsInfo.email}</Td>
                  <Td>{studentsInfo.participations}</Td>
                </Tr>
              </TableBody>
            ),
        )}
      </TableWrapper>
    </>
  );
};

export default StatisticsStudents;
