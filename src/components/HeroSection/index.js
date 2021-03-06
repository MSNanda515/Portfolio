import React, {useState} from 'react'
import Video from '../../assets/videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, 
    HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElement';
import {WelcomeItems} from "./WelcomeItems";

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>{WelcomeItems.title}</HeroH1>
                    <HeroP>
                        {WelcomeItems.des}
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="footer" onMouseEnter={onHover} onMouseLeave={onHover}
                            primary="true" dark="true" smooth={true} duration={500}
                            spy={true} exact='true' offset={-80} activeClass="active">
                            Get in Touch {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
