import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#about">Tjennester</AnchorLink>
		<AnchorLink href="#projects">Om oss</AnchorLink>
		<AnchorLink href="#contact">Kontakt</AnchorLink>
	</Wrapper>
)

export default NavbarLinks
