import styled from 'styled-components'

export const AwardsTextWrapper = styled.div `
    max-width: 1000px;
    padding-top: 0;
    padding-top: 60px;
`;
export const AwardsHeadingWrapper = styled.div `
    text-align: center;
    height: fit-content;

    @media screen and (max-width: 480px) {
        margin-bottom: 0px; 
    }
    
`

export const AwardsInfoWrapper = styled.div `
    display: flex;
    flex-direction: column;
    z-index: 1;
    height: fit-content;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 80px 20px 80px 20px; 
    // top right bottom left
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 5px;
    }
`;

export const AwardsInfoDes = styled.ul `
    // list-style-type: ;
    text-align: left;
    font-size: 18px;

    @media screen and (max-width: 480px) {
        list-style-position: inside;
    }
`
