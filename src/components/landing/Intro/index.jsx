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
          MED EXALTIS
        </h1>
        <p>
        Leverandør av stillas med base i Innlandet.
Vi leverer stillas til alt innen nybygg i tillegg til
vedlikehold og ombygg av private og offentlige bygg.
Vårer kunder er hovedsakelig i Oslo, Viken og Innlandet fylker.
        </p>
        <Button as={AnchorLink} href="#omoss">
          Om oss
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="-" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
