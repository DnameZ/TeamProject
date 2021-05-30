import React from 'react';
import headingImage from '../../assets/images/login-heading.png';
import { Overlay, Figure, Image, Form, FormRow } from './LoginStyle';
import {
  Input,
  Label,
  ErrorLabel,
  PrimaryButton,
} from '../../lib/styles/generalStyles';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address!')
        .required('Email is required!'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long!')
        .required('Password is required!'),
    }),
    onSubmit: (values) => {
      setTimeout(() => {
        alert(JSON.stringify(values));
      }, 1000);
    },
  });

  return (
    <>
      <Overlay>
        <Figure>
          <Image src={headingImage} />
        </Figure>
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
            <PrimaryButton text="Prijava" type="large" />
          </FormRow>
        </Form>
      </Overlay>
    </>
  );
};

export default Login;
