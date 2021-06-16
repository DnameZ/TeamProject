import React, { useState } from 'react';

import StatisticsEvents from '../../components/StatisticsEvents/StatisticsEvents';
import StatisticsStudents from '../../components/StatisticsStudents/StatisticsStudents';
import Section from '../../components/Section/Section';

import { SectionContent } from '../../lib/styles/generalStyles';
import SortModal from '../../components/SortModal/SortModal';

import { events } from '../../lib/mock/statistics';

const Statistics = () => {
  const [showEvents, setShowEvents] = useState(true);
  const [event, setEvent] = useState(events);
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

  // sort
  const compareB = (a, b) => {
    const eventA = a.title.toUpperCase();
    const eventB = b.title.toUpperCase();

    if (eventA < eventB) {
      return 1;
    }
    if (eventA > eventB) {
      return -1;
    }
    return 0;
  };

  const compareC = (a, b) => {
    if (new Date(a.date) > new Date(b.date)) {
      return 1;
    }
    if (new Date(a.date) < new Date(b.date)) {
      return -1;
    }
    return 0;
  };

  const compareByGrade = (a, b) => {
    if (a.avgGrade > b.avgGrade) {
      return -1;
    }
    if (a.avgGrade < b.avgGrade) {
      return 1;
    }
    return 0;
  };

  const compareByParticipants = (a, b) => {
    if (a.participants > b.participants) {
      return -1;
    }
    if (a.participants < b.participants) {
      return 1;
    }
    return 0;
  };

  const sort = (sortMethod) => {
    let dataToSort;

    switch (sortMethod) {
      case 'chronologically':
        dataToSort = [...event].sort(compareC);
        break;
      case 'byName':
        dataToSort = [...event].sort(compareB);
        break;
      case 'byGrade':
        dataToSort = [...event].sort(compareByGrade);
        break;
      case 'byDefault':
        dataToSort = [...events];
        break;
      case 'byParticipants':
        dataToSort = [...event].sort(compareByParticipants);
        break;
      default:
        break;
    }
    setShowSortModalEvents(false);
    setEvent(dataToSort);
  };

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
        sortMethod1={() => sort('chronologically')}
        sortMethod2={() => sort('byName')}
        sortMethod3={() => sort('byGrade')}
        position="eventsAZ"
        showSortModalEvents={showSortModalEvents === 'modal-one'}
      />
      <SortModal
        content1="Defaultno"
        content2="Po broju sudjelovanja"
        sortMethod1={() => sort('byDefault')}
        sortMethod2={() => sort('byParticipants')}
        type="students"
        position="avgGrade"
        showSortModalEvents={showSortModalEvents === 'modal-two'}
      />
      <SectionContent />
      {showEvents ? (
        <StatisticsEvents events={event} />
      ) : (
        <StatisticsStudents />
      )}
    </>
  );
};

export default Statistics;
