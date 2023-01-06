import styled from "styled-components";

export const Navigator = styled.div`
    background-color: #333333;
    padding: 0 21%;
    display: flex;
    align-items: center;
    height: 25px;
    gap: 15px;
    a {
        color: white;
        align-items: center;
        letter-spacing: 0.21em;
        font-size: 11px;
        color: #FFFFFF;
    }
    a:hover {
        color: #FCB900;
    }
`;

export const Main = styled.main`

`;

export const Article = styled.article`
    background: url("/images/bg7.png") top repeat-y;
    background-size: contain;
    padding: 0 21%;
    h2 {
        text-align: center;
        letter-spacing: 0.33em;
        color: #FFFFFF;
        padding: 15px 0px;
    }
    p {
        color: white;
        text-align: justify;
        letter-spacing: 0.21em;
        font-size: 14px;
        line-height: 169.5%;
        padding-bottom: 30px;
    }
`;

export const Section = styled.section`

`;

export const Cards = styled.section`

`;

export const Card = styled.div`

`;

export const Sectors = styled.section`

`;