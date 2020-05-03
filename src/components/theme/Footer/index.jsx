import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { Row, Col } from 'reactstrap';
import { FaTwitter, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa';
import logo from 'assets/illustrations/logo2.jpg';
import { Wrapper, Flex, Links, Details, FooterWraper } from './styles';
import social from './social.json';
import * as globalVariables from '../../utils/styles';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <Link to="/">
          <img src={logo} width="120px" alt="I’m John and I’m a Backend & Devops engineer!" />
          <h2>Inlanddetstillas</h2>
        </Link>
      </Details>
      <Links>
        <ul>
          <li>Exaltis AS</li>
          <li>Org.nr. 922593159</li>
          <li>+47 (0)8888 8888</li>
          <li>info@innlandetstillas.no</li>
        </ul>
      </Links>
      <Links>
        <ul>
          <li>Exaltis AS</li>
          <li>Org.nr. 922593159</li>
          <li>+47 (0)8888 8888</li>
          <li>info@innlandetstillas.no</li>
        </ul>
      </Links>
    </Flex>
  </Wrapper>
);
