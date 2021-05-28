import React from 'react';
import {InfoContainer, 
    PlainHeading,
    ExpInfoElement, ExpInfoCol, ExpInfoPos, ExpInfoTitle, ExpInfoComp, 
    ExpInfoTeam, ExpInfoDur, ExpInfoDes, ExpInfoDesExp, 
    ExpTextWrapper, ExpInfoWrapper} from './InfoElements'

const ExpInfoSection = ({lightBg, id, lightText, headLine, darkText, 
    expData}) => {
    return (
       <>
        <InfoContainer lightBg={lightBg} id={id}>
            <ExpInfoWrapper>
                    <ExpTextWrapper>
                        <PlainHeading lightText={lightText}>{headLine}</PlainHeading>
                        {expData.map(item => (
                            <ExpInfoElement>
                                <ExpInfoCol>
                                    {/* <ExpInfoPos> */}
                                    <ExpInfoTitle darkText={darkText}>{item.title}</ExpInfoTitle>
                                    <ExpInfoComp darkText={darkText}>{item.comp}</ExpInfoComp>
                                    {/* </ExpInfoPos> */}
                                    <ExpInfoTeam darkText={darkText}>{item.team}</ExpInfoTeam>
                                    <ExpInfoDur darkText={darkText}>{item.dur}</ExpInfoDur>
                                </ExpInfoCol>
                                <ExpInfoCol>
                                    <ExpInfoDes>
                                        {item.des.map(points => (
                                            <ExpInfoDesExp darkText={darkText}>{points}</ExpInfoDesExp>
                                        ))}
                                    </ExpInfoDes>
                                </ExpInfoCol>
                            </ExpInfoElement>
                        ))}    
                            
                        {/* <PlainHeading lightText={lightText}>{headLine}</PlainHeading>
                        {description.map(item => (
                                <PlainSubtitle darkText={darkText}>{item}</PlainSubtitle>
                        ))} */}
                    </ExpTextWrapper>
            </ExpInfoWrapper>
        </InfoContainer>
       </>
    )
};

export default ExpInfoSection;
