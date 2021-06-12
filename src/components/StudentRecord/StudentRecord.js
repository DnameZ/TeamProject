import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import SearchBar from '../SearchBar/SearchBar';
import { confirmUserAttendance } from '../../api/user';
import { getUsersRegisteredToEvent } from '../../api/user';

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
  InputErrors,
} from './StudentRecordStyle';

import {
  Input,
  CheckboxOptionLabel,
  InputCheckbox,
  PrimaryButton,
  SecondaryButton,
} from '../../lib/styles/generalStyles';

const StudentRecord = ({ handleModalClose, ID }) => {
  const PrijavljeniP = 'Prijavljeni polaznici';
  const DodajP = 'Dodaj polaznike';
  const Prijavljeni = 'Prijavljeni';
  const Dodaj = 'Dodaj';
  const [isRecord, setIsRecord] = useState(Prijavljeni);
  const [isMobile, setIsMobile] = useState(false);
  const [users, setUsers] = useState([]);
  const object = {
    confirmedUsers: [
      '5a88c32c-1187-4584-89d8-1a6f2751658b',
      '1c9d5b23-cffe-4a9b-aefc-dbd75963b4a9',
    ],
  };
  const authToken = localStorage.getItem('authToken');
  const id = ID;

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
    getUsersRegisteredToEvent(id, authToken).then((result) => setUsers(result));
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
    <Modal title={'Evidentiraj polaznike'} handleModalClose={handleModalClose}>
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
        {isRecord === Prijavljeni ? <SignedIn users={users} /> : <AddStudent />}
      </StudentTable>
      <ButtonWrapper>
        {isRecord === Prijavljeni ? (
          <PrimaryButton
            onClick={() => confirmUserAttendance(object, id, authToken)}
            type={'modal/card'}
            text={'Spremi'}
          />
        ) : (
          <SecondaryButton type={'modal/card'} text={'Dodaj'} />
        )}
      </ButtonWrapper>
    </Modal>
  );
};

const AddStudent = () => {
  const formik = useFormik({
    initialValues: {
      Ime: '',
      Prezime: '',
      Email: '',
    },
    validationSchema: Yup.object({
      Ime: Yup.string().required('User should have name'),
      Prezime: Yup.string().required('User should have lastname'),
      Email: Yup.string().required('User should have E-mail'),
    }),
  });
  return (
    <>
      <Form>
        <FormRow>
          <InputLabel>Ime</InputLabel>
          <Input id="Ime" type="text" {...formik.getFieldProps('Ime')} />
          {formik.touched.Ime && formik.errors.Ime ? (
            <InputErrors>{formik.errors.Ime}</InputErrors>
          ) : null}
        </FormRow>
        <FormRow>
          <InputLabel>Prezime</InputLabel>
          <Input
            id="Prezime"
            type="text"
            {...formik.getFieldProps('Prezime')}
          />
          {formik.touched.Prezime && formik.errors.Prezime ? (
            <InputErrors>{formik.errors.Prezime}</InputErrors>
          ) : null}
        </FormRow>
        <FormRow>
          <InputLabel>E-mail adresa</InputLabel>
          <Input id="Email" type="text" {...formik.getFieldProps('Email')} />
          {formik.touched.Email && formik.errors.Email ? (
            <InputErrors>{formik.errors.Email}</InputErrors>
          ) : null}
        </FormRow>
      </Form>
    </>
  );
};

const SignedIn = ({ users }) => {
  const [text, setText] = useState('');
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
  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part) => (part === highlight ? <b>{part}</b> : part))}
      </span>
    );
  };

  let finalData = users.map((user) => ({
    ...user,
    fullName: `${user.firstName} ${user.lastName} (${user.email})` || '',
  }));

  const filteredUsers = finalData.filter((user) => {
    if (text == '') {
      return user.fullName;
    } else {
      return user.fullName;
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
              <InputCheckbox id={index + 6} type="checkbox" />
              <CheckboxOptionLabel htmlFor={index + 6}>
                {' '}
                {getHighlightedText(korisnik.fullName, text)}
              </CheckboxOptionLabel>
            </StudentData>
          ))}
        </StudentRow>
      </StudentBody>
    </>
  );
};

export default StudentRecord;
