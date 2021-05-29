import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  EventInfo,
  LabelNameOfEvent,
  NameOfEvent,
  NumberOfStudents,
  StudentRecord as StudentTable,
  StudentHead,
  StudentRow,
  Heading,
  StudentBody,
  StudentData,
  InputCheckBox,
  StudentInput,
  StudentInfo,
  ButtonWrapper,
  Form,
  FormRow,
  InputLabel,
} from './StudentRecordStyle';

import {
  Input,
  PrimaryButton,
  SecondaryButton,
} from '../../lib/styles/generalStyles';

const StudentRecord = () => {
  const Prijavljeni = 'Prijavljeni';
  const Dodaj = 'Dodaj';
  const [isRecord, setIsRecord] = useState('');

  const ToggleRecord = (Record) => {
    setIsRecord(Record);
  };

  const SetActiveOrInactive = (text) => {
    const active = 'active';
    const inactive = 'inactive';
    return isRecord === text ? active : inactive;
  };

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
            <Heading
              Func={() => ToggleRecord(Prijavljeni)}
              text={Prijavljeni}
              type={SetActiveOrInactive(Prijavljeni)}
            />
            <Heading
              Func={() => ToggleRecord(Dodaj)}
              text={Dodaj}
              type={SetActiveOrInactive(Dodaj)}
            />
          </StudentRow>
        </StudentHead>
        {isRecord === Prijavljeni ? <SignedIn /> : <AddStudent />}
      </StudentTable>
      {isRecord === Prijavljeni ? (
        <PrimaryButton type={'modal/card'} text={'Spremi'} />
      ) : (
        <SecondaryButton type={'modal/card'} text={'Dodaj'} />
      )}
    </Modal>
  );
};

const AddStudent = () => {
  return (
    <>
      <Form>
        <FormRow>
          <InputLabel>Ime</InputLabel>
          <Input />
        </FormRow>
        <FormRow>
          <InputLabel>Prezime</InputLabel>
          <Input />
        </FormRow>
        <FormRow>
          <InputLabel>E-mail adresa</InputLabel>
          <Input />
        </FormRow>
      </Form>
    </>
  );
};

const SignedIn = () => {
  return (
    <>
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
    </>
  );
};

export default StudentRecord;
