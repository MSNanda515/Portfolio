import React from 'react';
import {InfoContainer, PlainInfoWrapper,  
    PlainTextWrapper, TopLine, PlainSubtitle, BtnWrap, ImgWrap, Img,
    PlainHeading} from './InfoElements'

const PlainInfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, 
    description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
       <>
        <InfoContainer lightBg={lightBg} id={id}>
            <PlainInfoWrapper>
                    <PlainTextWrapper>
                        <PlainHeading lightText={lightText}>{headLine}</PlainHeading>
                        {description.map(item => (
                                <PlainSubtitle darkText={darkText}>{item}</PlainSubtitle>
                        ))}
                    </PlainTextWrapper>
            </PlainInfoWrapper>
        </InfoContainer>
       </>
    )
};

export default PlainInfoSection;
