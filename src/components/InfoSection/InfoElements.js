import styled from 'styled-components'

export const InfoContainer = styled.div `
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    padding-bottom: 30px;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

export const InfoWrapper = styled.div `
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div `
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` :`'col1 col2'`)};
    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`;

export const Column1 = styled.div `
    margin: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div `
    margin: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div `
    max-width: 800px;
    padding-top: 0;
    padding-top: 60px;
`;

export const TopLine = styled.p `
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1 `
    margin-bottom: 24px;
    font-size: 28px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p `
    // max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => ( darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div `
    display: none;
    justify-content: flex-start;
`

export const ImgWrap = styled.div `
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img `
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const PlainHeading = styled.h1 `
    font-family: 'Ubuntu', sans-serif;
    margin-bottom: 24px;
    font-size: 28px;
    line-height: 1.1;
    font-weight: 600;
    text-align: center;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const PlainTextWrapper = styled.div `
    max-width: 80%;
    padding-top: 60px;
`;


export const PlainInfoWrapper = styled.div `
    display: flex;
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

export const PlainSubtitle = styled.p `
    font-family: 'PT Serif', serif;
    // max-width: 440px;
    margin-bottom: 35px;
    font-size: 22px;
    line-height: 28px;
    text-align: justify;
    color: ${({ darkText }) => ( darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 480px) {
        text-align: center;
        font-size: 1rem;
    }
`;


export const ExpInfoWrapper = styled.div `
    display: flex;
    z-index: 1;
    height: fit-content;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px 30px 24px;
    justify-content: center;

    @media screen and (max-width: 480px) {

    }
    
`;

export const ExpTextWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 90%;
    padding-top: 60px;

    @media screen and (max-width: 480px) {
    }
`;


export const ExpInfoElement = styled.div `
    display: grid;
    grid-template-columns: 400px 600px;
    grid-gap: 26px;
    padding-bottom: 10px;


    @media screen and (max-width: 1000px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 26px;
        padding-bottom: 10px;
    }

    @media screen and (max-width: 480px) {
        display: initial;
    }
`;

export const ExpInfoCol = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    @media screen and (max-width: 480px) {
        border-style: solid;
        border-color: black;
        padding: 10px;

    }
`;

export const ExpInfoPos = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media screen and (max-width: 480px) {
        
    }
`;

export const ExpInfoTitle = styled.p `
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => ( darkText ? '#010606' : '#fff')};
    margin: 0;

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const ExpInfoComp = styled.p `
    font-size: 18px;
    line-height: 24px;
    // color: ${({ darkText }) => ( darkText ? '#010606' : '#fff')};
    color: #019859;
    margin: 0;
    padding-left: 0.4rem;

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const ExpInfoTeam = styled.i `
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => ( darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const ExpInfoDur = styled.p `
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => ( darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 480px) {
        margin: 0;
        padding: 0;
        font-size: 1rem;
    }
`;

export const ExpInfoDes = styled.ul `
    // list-style-type: ;
    text-align: left;
    font-size: 18px;

    @media screen and (max-width: 480px) {
        list-style-position: inside;
    }
`

export const ExpInfoDesExp = styled.li `
    color: ${({ darkText }) => ( darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;