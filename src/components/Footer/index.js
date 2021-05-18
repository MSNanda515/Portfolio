import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, 
    FaLinkedin} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, 
    FooterLinkItems, FooterLinkTitle, FooterLink} from "./FooterElements";
import {SocialIconLink, SocialIcons, SocialMedia, SocialMediaWrap, SocialLogo, 
    WebsiteRights, FooterLinkA} from "./FooterElements";
import {animateScroll as scroll} from 'react-scroll';
import resume from "../../assets/docs/ResumeMehar.pdf";

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
                                {/* <FooterLink to="/signin">Email</FooterLink> */}
                                <FooterLinkA href="mailto:msnanda515@gmail.com">Email</FooterLinkA>
                                <FooterLinkA href="https://www.linkedin.com/in/msnanda/" target="_blank">LinkedIn</FooterLinkA>
                                <FooterLinkA href={resume} target="_blank">Resume</FooterLinkA>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Social</FooterLinkTitle>
                                <FooterLinkA href="https://twitter.com/NandaMeharpreet" target="_blank">Twitter</FooterLinkA>
                                <FooterLinkA href="https://medium.com/@msnanda515" target="_blank">Medium</FooterLinkA>
                                <FooterLinkA href="https://www.instagram.com/msnanda515/" target="_blank">Instagram</FooterLinkA>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Software</FooterLinkTitle>
                                <FooterLinkA href="https://github.com/MSNanda515" target="_blank">Github</FooterLinkA>
                                <FooterLinkA href="https://devpost.com/meharpre" target="_blank">Devpost</FooterLinkA>
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
