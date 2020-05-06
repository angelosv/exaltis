import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <h2 className="text-center">Tjennester</h2>
    <Grid>
      <Item key={0} as="a" href="/" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h3>Lettstillas</h3>
            <p>Lettstillas i aluminium, klasse 3 (200 kg./m2).</p>
            <p>
Dette er et allsidig stillas som er tilstrekkelig for de fleste typer fasadearbeid. Eksempler på dette er maling, bytte av panel, vinduer med mer. Lettstillas er raskt å montere. Plattform har bredde på 61 cm. Leveres med sparkebord og rekkverk.
            </p>
          </Content>
          <Stats></Stats>
        </Card>
      </Item>
      <Item key={0} as="a" href="/" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h3>Murerstillas</h3>
            <p>Murerstillas i aluminium, klasse 5 (450 kg./m2).</p>
            <p>
              Dette er et stillas som tilfredsstiller tyngre oppussingsarbeider. Eksempel på dette er murerarbeid og
              arbeidsramper. Murerstillas passer godt dersom det er behov for større arbeidsbredde da platformdybde er
              på 1,20 meter.
            </p>
          </Content>
          <Stats></Stats>
        </Card>
      </Item>
      <Item key={0} as="a" href="/" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h3>Tak over tak</h3>
            <p>
              Tak over tak kan monteres dersom det er særlig behov for å unngå nedbør på arbeidsplassen. Eksempler på
              dette er bytte av tak, heving av bygg eller lengre prosjekter vinterstid.
            </p>
          </Content>
          <Stats></Stats>
        </Card>
      </Item>
      <Item key={0} as="a" href="/" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h3>Rullestillas</h3>
            <p>
              Rullestillas gir mulighet til å et flyttbart stillas ved behov for å arbeide trygt i høyden flere steder.
              Rullestillas vil fungere godt både innendørs og utendørs.{' '}
            </p>
          </Content>
          <Stats></Stats>
        </Card>
      </Item>
      <Item key={0} as="a" href="/" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h3>Kreative stillas</h3>
            <p>
              Stillas kan bygges på de mest «umulige» steder. Våre erfarne montører hjelper deg med å se muligheter i
              det «umulige».
            </p>
            <p>Vi leverer også stillas til idrettsarrangement, konserter og festivaler med mere. </p>
          </Content>
          <Stats></Stats>
        </Card>
      </Item>
      <Item key={0} as="a" href="/" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h3>Byggjerder</h3>
            <p>Lettstillas i aluminium, klasse 3 (200 kg./m2).</p>
            <p>
              Vi tilbyr byggjerder for å trygge din arbeidsplass. Disse kan låses og leveres med innsynsbeskyttelse
              dersom dette er ønskelig.
            </p>
          </Content>
          <Stats></Stats>
        </Card>
      </Item>
      <Item key={0} as="a" href="/" target="_blank" rel="noopener noreferrer">
        <Card>
          <Content>
            <h3>HMS</h3>
            <p>
              Alle våre montører har HMS-kort og gjennomført kurs i henhold til gjeldende reglement. Vi har også fokus
              på stillasbrukerens rettigheter til en trygg arbeidsplass og sørger derfor for at stillas er bygget etter
              de aktuelle forskrifter.
            </p>
          </Content>
          <Stats></Stats>
        </Card>
      </Item>
    </Grid>
  </Wrapper>
);
