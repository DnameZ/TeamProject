import React, { useState, useEffect } from 'react';
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
  const PrijavljeniP = 'Prijavljeni polaznici';
  const DodajP = 'Dodaj polaznike';
  const Prijavljeni = 'Prijavljeni';
  const Dodaj = 'Dodaj';
  const [isRecord, setIsRecord] = useState(Prijavljeni);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

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
            text={isMobile === false ? PrijavljeniP : Prijavljeni}
            type={SetActiveOrInactive(Prijavljeni)}
          />
          <Heading
            Func={() => ToggleRecord(Dodaj)}
            text={isMobile === false ? DodajP : Dodaj}
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
  const [text, setText] = useState(null);
  const handleChange = (value) => {
    setText(value);
  };
  const Korisnici = [
    {
      imeIprezime: 'Andrija Mrkonjic',
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
  const filteredUsers = Korisnici.filter((user) => {
    if (text == '') {
      return user;
    } else if (user.imeIprezime.toLowerCase().includes(text.toLowerCase())) {
      return user;
    }
  });
  return (
    <>
      <StudentBody>
        <StudentRow>
          <SearchBar onValueChanged={handleChange} />
        </StudentRow>
        <StudentRow>
          {filteredUsers.map((korisnik, index) => (
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
