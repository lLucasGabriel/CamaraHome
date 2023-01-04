import styled from "styled-components";

export const Main = styled.main`
    padding: 0 20%;
    background-image: url("/images/bg2.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    grid-template-columns: repeat(2, 580px);
    grid-template-rows: repeat(5, auto);
    row-gap: 15px;
    grid-template-areas:
        "section section"
        "cards cards"
        "info destaque"
        "consulta noticias";
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

export const Section = styled.section`
    grid-area: section;
    background: #E6E6E6;
    height: fit-content;
    display: grid;
    grid-template-columns: 660px 340fr;
    grid-template-rows: 300px 60px;
    grid-template-areas:
        "slider agenda"
        "cards cards";
    gap: 5px;
    img {
        grid-area: slider;
    }
    aside {
        grid-area: agenda;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 1px; 
        ul {
            height: calc(300px - 50px);
            overflow-y: scroll;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 1px;
            li {
                display: grid;
                grid-template-columns: 40px 1fr;
                grid-template-rows: 40px 1fr 50px;
                grid-template-areas:
                "date date"
                "event event"
                "icon local";
                padding-left: 15px;
                small {
                    grid-area: date;
                    letter-spacing: 0.1em;
                    color: #333333;
                    padding: 10px 0px;
                    font-size: 14px;
                }
                small:not(first-child) {
                    border-bottom: 0.5px solid #B9B9B9;
                }
                h4 {
                    grid-area: event;
                    letter-spacing: 0.1em;
                    color: rgba(51, 51, 51, 0.79);
                    padding: 15px 0px;
                    font-size: 14px;
                }
                img {
                    grid-area: icon;
                }
                p {
                    grid-area: local;
                    letter-spacing: 0.1em;
                    color: #9D6B53;
                    font-weight: 800;
                    font-size: 14px;
                }
            }
        }   
    }
    footer {
        grid-area: cards;
        display: flex;
        justify-content: space-between;
        button {
            cursor: pointer;
            width: 225px;
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.9);
            border-bottom: 2px solid #9D6B53;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 2px;
            img {
                margin: 15px;
            }
            p {
                letter-spacing: 0.21em;
                color: #9D6B53;
            }
        }
    }
`;

export const Cards = styled.section`
    rid-area: cards;
    display: flex;
    justify-content: space-between;
    width: 1160px;
`;

export const Info = styled.section`
    grid-area: info;
    width: 575px;
    height: 280px;
    background: #FFFFFF;
    border-bottom: 2px solid #9D6B53;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
`;

export const Destaque = styled.section`
    grid-area: destaque;
    width: 580px;
    height: 280px;
    background: #FFFFFF;
    border-bottom: 2px solid #9D6B53;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
`;

export const Consulta = styled.section`
    grid-area: consulta;
    width: 575px;
    height: 280px;
    background: #FFFFFF;
    border-bottom: 2px solid #9D6B53;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
`;

export const Noticias = styled.section`
    grid-area: noticias;
    width: 580px;
    height: 280px;
    background: #FFFFFF;
    border-bottom: 2px solid #9D6B53;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
`;