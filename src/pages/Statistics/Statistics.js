import React, { useState } from 'react';

import StatisticsEvents from '../../components/StatisticsEvents/StatisticsEvents';
import StatisticsStudents from '../../components/StatisticsStudents/StatisticsStudents';
import Section from '../../components/Section/Section';

import { SectionContent } from '../../lib/styles/generalStyles';

const Statistics = () => {
  const [showEvents, setShowEvents] = useState(true);
  return (
    <>
      <Section
        sectionTitle="Statistika"
        leftButton="Događaji"
        rightButton="Studenti"
        setShowEvents={setShowEvents}
      />
      <SectionContent />
      {showEvents ? <StatisticsEvents /> : <StatisticsStudents />}
    </>
  );
};

export default Statistics;
