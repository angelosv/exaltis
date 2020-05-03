import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/image1.jpg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>
          DU SKAL TRIVES I HØYDEN
          <br />
          MED Inlanndetstillas
        </h1>
        <p>
          totalleverandørene av stillas i Norge. Våre hovedsatsingsområder er å levere stillas til industri, offshore,
          bygg samt vedlikehold og modifikasjonsprosesser.
        </p>
        <Button as={AnchorLink} href="#omoss">
          Om oss
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
