import React from 'react';
import { Form, withFormik, FastField, ErrorMessage } from 'formik';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { recaptcha_key } from 'data/config';
import { Error, Center, InputField } from './styles';

const ContactForm = ({ setFieldValue, isSubmitting, values, errors, touched }) => (
  <Form
    name="portfolio-dev"
    method="post"
    data-netlify="true"
    data-netlify-recaptcha="true"
    data-netlify-honeypot="bot-field"
  >
    <InputField>
      <Input as={FastField} type="text" name="name" component="input" aria-label="name" placeholder="Full name*" />
      <ErrorMessage component={Error} name="name" />
    </InputField>
    <InputField>
      <Input
        id="email"
        aria-label="email"
        component="input"
        as={FastField}
        type="email"
        name="email"
        placeholder="Email*"
      />
    </InputField>
    <InputField>
      <Input
        id="telefon"
        aria-label="telefon"
        component="input"
        as={FastField}
        type="phone"
        name="telefon"
        placeholder="Telefon*"
      />
    </InputField>
    <InputField>
      <Input
        as={FastField}
        component="textarea"
        aria-label="message"
        id="message"
        rows="8"
        type="text"
        name="message"
        placeholder="Message*"
        error={touched.message && errors.message}
      />
      <ErrorMessage component={Error} name="message" />
    </InputField>
    <Center>
      <Button type="submit">Submit</Button>
    </Center>
  </Form>
);

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
    recaptcha: '',
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      name: Yup.string().required('Full name field is required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Email field is required'),
      message: Yup.string().required('Message field is required'),
      recaptcha: Yup.string().required('Robots are not welcome yet!'),
    }),
})(ContactForm);
