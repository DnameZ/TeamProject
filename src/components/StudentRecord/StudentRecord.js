import React from 'react';
import Modal from '../Modal/Modal';

import {
  EventInfo,
  LabelNameOfEvent,
  NameOfEvent,
  NumberOfStudents,
} from './StudentRecordStyle';

const StudentRecord = () => {
  return (
    <Modal title={'Evidentiraj polaznike'}>
      <EventInfo>
        <LabelNameOfEvent>Naziv događaja:</LabelNameOfEvent>
        <NameOfEvent>Kreiraj svoju Pokedex aplikaciju uz ReactJS</NameOfEvent>
        <NumberOfStudents>0/40</NumberOfStudents>
      </EventInfo>
    </Modal>
  );
};

export default StudentRecord;
