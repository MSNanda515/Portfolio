import React from 'react';
import Icon1 from '../../assets/images/svg3.svg';
import Icon2 from '../../assets/images/svg4.svg';
import Icon3 from '../../assets/images/svg5.svg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon,
    ServicesH2, ServicesP} from './ServicesElements'


const Services = ({projects}) => {
    return (
        <ServicesContainer id="projects">
            <ServicesH1>Projects</ServicesH1>
            <ServicesWrapper>
                {projects.map(rItem => (
                    <ServicesCard>
                        <ServicesIcon src={rItem.img}/>
                        <ServicesH2>{rItem.prjName}</ServicesH2>
                        <ServicesP>{rItem.prjDes}</ServicesP>
                    </ServicesCard>
                ))}
            </ServicesWrapper>
            
            
        </ServicesContainer>
    )
}

export default Services;
