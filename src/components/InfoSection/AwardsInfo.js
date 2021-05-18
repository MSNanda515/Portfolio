import React from 'react';
import im1 from '../../assets/images/svg1.svg';

import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, 
    TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img,
    PlainHeading, PlainInfoWrapper, ExpInfoDesExp} from './InfoElements'
import {AwardsHeadingWrapper, AwardsInfoWrapper, AwardsInfoDes} from './AwardElements';

const AwardsInfo = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, 
    description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
       <>
        <InfoContainer lightBg={lightBg} id={id}>
            <AwardsInfoWrapper>
                <AwardsHeadingWrapper>
                <PlainHeading lightText={lightText}>Achievements</PlainHeading>
                </AwardsHeadingWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <AwardsInfoDes>
                            {description.map(item => (
                                <ExpInfoDesExp darkText={darkText}>{item}</ExpInfoDesExp>
                            ))}
                        </AwardsInfoDes>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </AwardsInfoWrapper>
        </InfoContainer>
       </>
    )
}

export default AwardsInfo;
