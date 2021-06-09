import React, { useState } from 'react';

import StatisticsEvents from '../../components/StatisticsEvents/StatisticsEvents';
import StatisticsStudents from '../../components/StatisticsStudents/StatisticsStudents';
import Section from '../../components/Section/Section';

import { SectionContent } from '../../lib/styles/generalStyles';
import SortModal from '../../components/SortModal/SortModal';

const Statistics = () => {
  const [showEvents, setShowEvents] = useState(true);
  const [showSortModalEvents, setShowSortModalEvents] = useState(
    'modal-one' | 'modal-two',
  );

  const handleShowModalOne = () => {
    setShowSortModalEvents('modal-one');
  };

  const handleShowModalTwo = () => {
    setShowSortModalEvents('modal-two');
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setShowSortModalEvents(false);
    }
  };

  window.addEventListener('resize', handleResize);

  return (
    <>
      <Section
        onOpenSortModalLeft={handleShowModalOne}
        onOpenSortModalRight={handleShowModalTwo}
        sectionTitle="Statistika"
        leftButton="Događaji"
        rightButton="Studenti"
        setShowEvents={setShowEvents}
        leftTitle="Poredaj"
        rightTitle="Poredaj"
        type="statistics"
      />
      <SortModal
        content1="Kronološki"
        content2="Po nazivu događaja"
        content3="Po prosječnoj ocjeni"
        position="eventsAZ"
        showSortModalEvents={showSortModalEvents === 'modal-one'}
      />
      <SortModal
        content1="Defaultno"
        content2="Po broju sudjelovanja"
        type="students"
        position="avgGrade"
        showSortModalEvents={showSortModalEvents === 'modal-two'}
      />
      <SectionContent />
      {showEvents ? <StatisticsEvents /> : <StatisticsStudents />}
    </>
  );
};

export default Statistics;
