import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import logo from 'assets/illustrations/logo.png';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">
      <img src={logo} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
