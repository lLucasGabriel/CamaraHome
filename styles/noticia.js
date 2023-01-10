import styled from "styled-components";

export const Title = styled.div`
    grid-area: header;
    display: flex;
    align-items: center;
    gap: 15px;
    height: 70px;
    padding: 0 21%;
    background: #F5F5F5;
    letter-spacing: 0.21em;
    color: #333333;
`;

export const Main = styled.main`
    display: flex;
    gap: 100px;
    padding: 15px 21%;
    header {
        display: flex;
        align-items: center;
        background: #FFFFFF;
        border-bottom: 2px solid #9D6B53;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
        height: 50px;
        img {
            margin: 0 15px;
        }
        h3 {
            display: flex;
            align-items: center;
            border-left: 0.5px solid #B9B9B9;
            padding-left: 15px;
            height: 50px;
            letter-spacing: 0.1em;
            color: #333333;
            font-size: 15px;
        }
        span {
            color: #9D6B53;
        }
    }
`;

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
        text-transform: uppercase;
    }
    a:hover {
        color: #FCB900;
    }
`;

export const Content = styled.section`
    grid-area: content;
    width: 548px;
    img {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    small {
        letter-spacing: 0.21em;
        color: #333333;
    }
    h3 {
        font-size: 21px;
        padding: 30px 0px;
        letter-spacing: 0.33em;
        text-transform: uppercase;
        color: #000000;
    }
    p {
        border-top: 1px solid #B9B9B9;
        padding-top: 15px;
        text-align: justify;
        letter-spacing: 0.21em;
        color: #333333;
    }
`;

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Destaque = styled.section`
    width: 550px;
    border: 0.5px solid #B9B9B9;
    height: fit-content;
`;

export const Noticias = styled.section`
    grid-area: noticias;
    border: 0.5px solid #B9B9B9;
    width: 550px;
    height: 437px;
    ul {
        height: calc(430px - 100px);
        overflow-y: scroll;
    }
    a {
        display: flex;
        border-bottom: 0.5px solid #B9B9B9;
    }
    a:hover {
        background-color: #A2130B;
        .date, .headline {
            color: white;
        }
    }
    .date {
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 13px;
        letter-spacing: 0.1em;
        color: #9D6B53;
        font-weight: 800;
        padding: 5px 7px;
        border-right: 0.5px solid #B9B9B9;
    }
    .headline {
        display: flex;
        align-items: center;
        font-size: 13px;
        letter-spacing: 0.15em;
        color: #333333;
        padding: 5px;
    }
    footer {
        display: flex;
        align-items: center;
        height: 50px;
        border-top: 0.5px solid #B9B9B9;
        a {
            background: rgba(157, 107, 83, 0.9);
            border-bottom: 2px solid #805845;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 2px;
            color: white;
            text-align: center;
            letter-spacing: 0.21em;
            margin-left: 10px;
            padding: 5px 20px;
        }
    }
`;