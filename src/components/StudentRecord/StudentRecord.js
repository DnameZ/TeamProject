import React, { useState } from 'react';
import Modal from '../Modal/Modal';

import SearchBar from '../SearchBar/SearchBar';

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
  Form,
  FormRow,
  InputLabel,
  ButtonWrapper,
} from './StudentRecordStyle';

import {
  Input,
  CheckboxOptionLabel,
  InputCheckbox,
  PrimaryButton,
  SecondaryButton,
} from '../../lib/styles/generalStyles';

const StudentRecord = () => {
  const Prijavljeni = 'Prijavljeni';
  const Dodaj = 'Dodaj';
  const [isRecord, setIsRecord] = useState(Prijavljeni);

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
        </StudentHead>
        {isRecord === Prijavljeni ? <SignedIn /> : <AddStudent />}
      </StudentTable>
      <ButtonWrapper>
        {isRecord === Prijavljeni ? (
          <PrimaryButton type={'modal/card'} text={'Spremi'} />
        ) : (
          <SecondaryButton type={'modal/card'} text={'Dodaj'} />
        )}
      </ButtonWrapper>
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
  const Korisnici = [
    {
      imeIprezime: 'Marko Mrkonjic',
      email: 'markomrki45@hotmail.com',
    },
    {
      imeIprezime: 'Marko Mrkonjic',
      email: 'markomrki45@hotmail.com',
    },
    {
      imeIprezime: 'Marko Mrkonjic',
      email: 'markomrki45@hotmail.com',
    },
  ];
  return (
    <>
      <StudentBody>
        <StudentRow>
          <SearchBar />
        </StudentRow>
        <StudentRow>
          {Korisnici.map((korisnik, index) => (
            <StudentData key={index}>
              <InputCheckbox id={index} type="checkbox" />
              <CheckboxOptionLabel htmlFor={index}>
                {' '}
                {korisnik.imeIprezime}
              </CheckboxOptionLabel>
            </StudentData>
          ))}
        </StudentRow>
      </StudentBody>
    </>
  );
};

export default StudentRecord;
