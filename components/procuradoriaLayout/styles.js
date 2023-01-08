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
    background: url("/images/bg8.png") top repeat-y;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    img {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        padding-right: 15px;
    }
    h2 {
        text-align: center;
        padding-bottom: 30px;
        letter-spacing: 0.33em;
        font-size: 21px;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h3 {
        letter-spacing: 0.38em;
        color: #760D07;
    }
    h4 {
        letter-spacing: 0.21em;
        color: #333333;
        padding-top: 15px;
    }
    p {
        letter-spacing: 0.21em;
        color: #FFFFFF;
        font-size: 14px;
        padding-top: 15px;
    }
    .container {
        width: 1000px;
        display: flex;
        padding: 35px;
        gap: 15px;
        border: 1px solid rgba(255, 255, 255, 0.54);
        filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
        border-radius: 2px;
        background: rgba(255, 255, 255, 0.1);
    }
`;

export const Cards = styled.section`
    background: url("/images/bg7.png") top repeat-y;
    background-size: contain;
    padding: 30px 21%;
    h2 {
        text-align: center;
        padding-bottom: 30px;
        letter-spacing: 0.33em;
        font-size: 21px;
        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);       
    }
    .container {
        display: flex;
        justify-content: center;
        gap: 25px;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 180px;
        border: 1px solid #FFFFFF;
        filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
        border-radius: 2px;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: inset 0px 1px 5px 2px rgba(0, 0, 0, 0.25);
    }
    h4 {
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.21em;
        color: #FFFFFF;
        font-size: 13px;
        height: 70px;
        width: 180px;
        border-bottom: 0.3px solid #FFFFFF;
    }
    p {
        padding-top: 10px;
        font-size: 11px;
        line-height: 160%;
        text-align: justify;
        letter-spacing: 0.21em;
        color: #D8D8D8;
    }
`;

export const Sectors = styled.section`
    background: url("/images/bg9.png") top repeat-y;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 25px;
    .container {
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.1);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 2px;
        border: 1px solid #FFFFFF;
        padding: 20px;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
            text-align: center;
            width: 570px;
            padding-bottom: 30px;
            letter-spacing: 0.33em;
            font-size: 19px;
            color: #FFFFFF;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);             
        }
    }
    .members {
        display: flex;
        gap: 10px;
        .box {
            border: none;
        }
    }
    .bar {
        width: 1px;
        height: 250px;
        background: #FFFFFF;
        margin: 0px 15px;
    }
`;