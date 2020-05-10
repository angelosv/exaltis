import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/image2.jpg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="" />
      </Thumbnail>
      <Details>
        <h1>Om oss</h1>
        <p>
          Exaltis er tilbyr utleie og montering av stillas. Vårt mål er at dine håndtverkere skal ha en trygg
          og sikker arbeidsplass. Vårt team har lang erfaring i bransjen både i Norge, off-shore og internasjonalt. Vi
          stiller med et topp forberedt team som gir tryggheten som kreves for at deres prosjekteter skal lykkes.
        </p>
        <Button as={AnchorLink} href="#contact">
          Kontakt oss
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
