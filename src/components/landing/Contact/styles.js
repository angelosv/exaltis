import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
width:800px;
  @media (max-width: 960px) {
    flex-direction: column;
    width:350px;

  }
`;

export const Details = styled.div`
  flex: 1;
text-align:center;
  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;

    order: 1;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #1b2b3a;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #1b2b3a;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
