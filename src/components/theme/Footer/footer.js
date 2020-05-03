import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import * as globalVariables from './utils/styles'
import { Row, Col } from 'reactstrap'
import Logo from "../images/svg/white-logo.svg"

import { FaTwitter, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa';


const LogoCustom = styled.div`
  svg {
    width: 10rem;
  }
`


function footer() {
    return (
        <div class="section fp-auto-height" id="section3">
    
        <FooterWraper>
            <div class="container">
                <div class="content-block">
                    <Row class="row">
                        <div class="col-lg-4">
                            <div class="footer-logo">
                                
                                <Link>    
                                <LogoCustom>
            <Logo className="custom logo-custom" style={{ fill: "red" }} />
          </LogoCustom>                                </Link>
                            </div>
                                <p>Reduce carbon emissions logical costs</p>
                                <div className="social-network">
                                    <ul>
                                        <li>
                                            <Link to={'/'}>
                                                <FaTwitter size={globalVariables.globalSpace * 2 + 'rem'} />
                                            </Link>    
                                        </li>
                                        <li>
                                            <Link to={'/'}>
                                                <FaLinkedinIn size={globalVariables.globalSpace * 2 + 'rem'} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>
                                                <FaGooglePlusG size={globalVariables.globalSpace * 2 + 'rem'} />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="widget-block">
                                        <h3>Main</h3>
                                        <div class="footer-nav">
                                            <ul>
                                                <li><Link to={'/challenge'}>Challenge</Link></li>
                                                <li><Link to={'/solution'}>Solution</Link></li>
                                                <li><Link to={'/impact'}>Impact</Link></li>
                                                <li><Link to={'/application'}>Application</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                    <div class="col-lg-4">
                                        <div class="widget-block">
                                                    <h3>Help</h3>
                                                    <div class="footer-nav">
                                                        <ul>
                                                            <li><Link to={'/faq'}>FAQ's</Link></li>
                                                            <li><Link to={'/about'}>About us</Link></li>
                                                            <li><Link to={'/privacy'}>Privacy</Link></li>
                                                            <li><Link to={'/contact'}>Contact</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                            
                        </div>
                    </Row>
                    <Row>
                        <Col className={'text-center'}>
                        <hr/> <p>      © {new Date().getFullYear()}, Copy right
          {` `}
                            <a href="https://www.q-bic.com">Q-BIC AS</a></p></Col>
                    </Row>
                    </div>
                </div>
       
        </FooterWraper>
        </div>
    )
}

const FooterWraper = styled.div`

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

export default footer
