import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'
import logo from 'assets/illustrations/logo2.jpg'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">
			<img src={logo} alt="I’m John and I’m a Backend & Devops engineer!" />
		</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
