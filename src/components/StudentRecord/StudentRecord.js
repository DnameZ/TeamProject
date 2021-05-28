import React from 'react';
import Modal from '../Modal/Modal';

import {
  EventInfo,
  LabelNameOfEvent,
  NameOfEvent,
  NumberOfStudents,
  StudentRecord as StudentTable,
  StudentHead,
  StudentRow,
  StudentHeading,
  StudentBody,
  StudentData,
  InputCheckBox,
  StudentInput,
  StudentInfo,
  ButtonWrapper,
} from './StudentRecordStyle';

import { Input, PrimaryButton } from '../../lib/styles/generalStyles';

const StudentRecord = () => {
  return (
    <Modal title={'Evidentiraj polaznike'}>
      <EventInfo>
        <LabelNameOfEvent>Naziv događaja:</LabelNameOfEvent>
        <NameOfEvent>Kreiraj svoju Pokedex aplikaciju uz ReactJS</NameOfEvent>
        <NumberOfStudents>0/40</NumberOfStudents>
      </EventInfo>
      <StudentTable>
        <StudentHead>
          <StudentRow>
            <StudentHeading>Prijavljeni</StudentHeading>
            <StudentHeading>Dodaj</StudentHeading>
          </StudentRow>
        </StudentHead>
        <StudentBody>
          <StudentRow>
            <StudentInput>
              <Input />
            </StudentInput>
          </StudentRow>
          <StudentRow>
            <StudentData>
              <InputCheckBox type="checkbox" />
              <StudentInfo>Marko Mrkonjic</StudentInfo>
            </StudentData>
            <StudentData>
              <InputCheckBox type="checkbox" />
              <StudentInfo>Andrija Mrkonjic</StudentInfo>
            </StudentData>
          </StudentRow>
        </StudentBody>
      </StudentTable>
      <PrimaryButton type={'modal/card'} text={'Spremi'} />
    </Modal>
  );
};

export default StudentRecord;
