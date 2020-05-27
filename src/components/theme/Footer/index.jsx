import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { Row, Col } from 'reactstrap';
import { FaTwitter, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa';
import logo from 'assets/illustrations/logo.png';
import { Wrapper, Flex, Links, Details, FooterWraper } from './styles';
import social from './social.json';
import * as globalVariables from '../../utils/styles';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <Link to="/">
          <img src={logo} width="250px" />
        </Link>
      </Details>

      <Links>
        <ul>
          <li>
            <b>Exaltis AS</b>
          </li>
          <li>Org.nr. 922593159</li>
          <li>+47 969 22 352</li>
          <li>+47 941 95 605</li>
          <li>Meierivegen 10, 2340 Løten, Norge</li>
          <li>post@Exaltis.no</li>
        </ul>
      </Links>
    </Flex>
  </Wrapper>
);
