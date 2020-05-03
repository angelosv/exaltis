import styled from 'styled-components';
import * as globalVariables from '../../utils/styles'
export const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 14rem 0 4rem;
  }
`;

export const Flex = styled.div`
ul{
  list-style: none;

}
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Details = styled.div`
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;




export const FooterWraper = styled.div`

    font-size: ${globalVariables.globalSpace * 1.2 + 'rem'};
    background-color: ${globalVariables.colors.footer};
    position: relative;
    color: ${globalVariables.colors.white};
    padding-top: ${globalVariables.globalSpace * 6 + 'rem'};
    padding-bottom: ${globalVariables.globalSpace * 6 + 'rem'};
    z-index: 2;
a{
    color: ${globalVariables.colors.white};
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    &:hover{
        color:#17B8F3; 
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    padding-left: .1em;
    text-decoration: none;
    }
    &:before{
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
    }
}
ul {
          list-style-type: none;
          margin-left:0;
          padding-left:0;
    }
li{
    padding-top: ${globalVariables.globalSpace *1.5 + 'rem'}
}
.social-network{
    svg{
        fill:${globalVariables.style.White};
        margin: 1rem;
    }
    ul {
          list-style-type: none;
          margin-left:0;
          padding-left:0;
    }
    li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 0px;
  text-decoration: none;
}

}

hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}


h3 {
    font-size: ${globalVariables.globalSpace * 1.2 + 'rem'};
}
p {
        font-size: ${globalVariables.globalSpace * 1 + 'rem'};

    margin: 0;
    color: ${globalVariables.style.White};
    a{
        color: ${globalVariables.style.White};
        &:hover{
            color: ${globalVariables.style.White};
        }
    }
}

.footer-logo {
        margin-bottom: 1.875rem;
    }



    .gatsby-image-wrapper img{
        padding:50px!important;
            width: 99% !important;
      }
`
