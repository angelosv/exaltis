import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components';
import { Wrapper, Details, Thumbnail, Error, Center, InputField } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h2>Kontakt oss</h2>
      <Form name="contact" action="/success" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <FormGroup>
          <InputCustom type="input" name="name" placeholder="Navn" className="style-form" />
        </FormGroup>
        <FormGroup>
          <InputCustom type="email" name="email" placeholder="E-post" className="style-form" />
        </FormGroup>
        <FormGroup>
          <InputCustom type="input" name="telefon" placeholder="Telefon" className="style-form" />
        </FormGroup>
        <FormGroup>
          <InputCustomText type="textarea" name="text" className="" placeholder="Message" />
        </FormGroup>
        <ButtonCustom type="submit">SEND</ButtonCustom>
      </Form>
    </Details>
  </Wrapper>
);

export const InputCustom = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #1a2c39;
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  ${({ error }) =>
    error &&
    `
		border-color: #ff4136;
	`}

  &::placeholder {
    color: #a7a7a7;
  }
`;

export const InputCustomText = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #1a2c39;
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;
  height: 150px;
  ${({ error }) =>
    error &&
    `
		border-color: #ff4136;
	`}

  &::placeholder {
    color: #a7a7a7;
  }
`;

export const ButtonCustom = styled.button`
  cursor: pointer;
  border-radius: 30px;
  padding: 0.7rem 2.5rem;
  margin: 2.7rem 2.5rem;

  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fec70e;
  background: #1a2c39;
  transition: background 0.5s ease;
  &:hover {
    background: #004a97;
  }
  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #1b2b3a;
	`}
`;
