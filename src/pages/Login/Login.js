import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// style
import headingImage from '../../assets/images/login-heading.png';
import { Overlay, Figure, Image, Form, FormRow } from './LoginStyle';
import {
  Input,
  Label,
  ErrorLabel,
  PrimaryButton,
  SuccessMessage,
} from '../../lib/styles/generalStyles';

// components
import { loginUser } from '../../api/user';
import { getAllUsers } from '../../api/user';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router';

const Login = () => {
  const history = useHistory();
  const [isError, setIsError] = useState(false);
  const [successMessage, setIsSuccessMessage] = useState('');
  const [isRequestFinished, setIsRequestFinished] = useState(false);
  const { handleUserLogin } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address!')
        .required('Email adresa je obavezna!'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long!')
        .required('Lozinka je obavezna!'),
    }),
    onSubmit: async (values) => {
      setIsError(false);
      setIsRequestFinished(false);

      try {
        const response = await loginUser(values);
        const users = await getAllUsers(response.token);
        const isAdmin = users.find(
          (user) => user.email === values.email,
        ).isAdmin;

        handleUserLogin(response.token, isAdmin);
        setIsSuccessMessage('User login successful');

        history.push(isAdmin ? '/records' : '/events');
      } catch (error) {
        setIsError(true);
        setIsSuccessMessage('User login failed!');
      } finally {
        setIsRequestFinished(true);
      }
    },
  });

  return (
    <>
      <Overlay>
        <Figure>
          <Image src={headingImage} />
        </Figure>
        {isRequestFinished && (
          <SuccessMessage isError={isError}>{successMessage}</SuccessMessage>
        )}
        <Form onSubmit={formik.handleSubmit}>
          <FormRow>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <ErrorLabel>{formik.errors.email}</ErrorLabel>
            ) : null}
          </FormRow>
          <FormRow>
            <Label>Lozinka:</Label>
            <Input
              type="password"
              id="password"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <ErrorLabel>{formik.errors.password}</ErrorLabel>
            ) : null}
          </FormRow>
          <FormRow>
            <PrimaryButton text="Prijava" type="fullWidth" />
          </FormRow>
        </Form>
      </Overlay>
    </>
  );
};

export default Login;
