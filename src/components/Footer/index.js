import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, 
    FaLinkedin} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, 
    FooterLinkItems, FooterLinkTitle, FooterLink} from "./FooterElements";
import {SocialIconLink, SocialIcons, SocialMedia, SocialMediaWrap, SocialLogo, 
    WebsiteRights} from "./FooterElements";
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer id="footer">
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Connect</FooterLinkTitle>
                                <FooterLink to="/signin">Email</FooterLink>
                                <FooterLink to="/signin">LinkedIn</FooterLink>
                                <FooterLink to="/signin">Resume</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Social</FooterLinkTitle>
                                <FooterLink to="/signin">Twitter</FooterLink>
                                <FooterLink to="/signin">Medium</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Software</FooterLinkTitle>
                                <FooterLink to="/signin">Github</FooterLink>
                                <FooterLink to="/signin">Devpost</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>Mehar Singh</SocialLogo>
                            <WebsiteRights>© {new Date().getFullYear()} All 
                            Rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href="//www.twitter.com/briandesignz" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>  
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>  
        </>
    )
}

export default Footer
