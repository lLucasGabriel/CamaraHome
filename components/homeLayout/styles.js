import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url("/images/bg6.png");
    background-repeat: no-repeat;
    background-size: cover;
    .content {
        padding: 15px 20%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        background: url("/images/bg7.png") top repeat-y;;
        background-size: contain;
    }
    .sections {
        display: grid;
        grid-template-columns: repeat(2, 548px);
        grid-template-rows: repeat(2, 320px);
        grid-template-areas: 
        "info destaque"
        "consulta noticias";
        gap: 10px;
        section {
            background: #FFFFFF;
            border-bottom: 2px solid #9D6B53;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 2px;
        }
    }
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
    height: fit-content;
    display: grid;
    grid-template-columns: 660px 440px;
    grid-template-rows: 300px 60px;
    grid-template-areas:
        "slider agenda"
        "cards cards";
    gap: 5px;
    .slide {
        grid-area: slider;
        width: 660px;
    }
    aside {
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
        margin-bottom: 5px;
        button {
            cursor: pointer;
            width: 215px;
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
    grid-area: cards;
    display: flex;
    justify-content: space-between;
    width: 1105px;
    img {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 270px;
    }
`;

export const Info = styled.section`
    grid-area: info;
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 150px auto;
        gap: 15px;
        padding: 15px;
    }
    .box {
        background: rgba(157, 107, 83, 0.9);
        border-bottom: 2px solid #805845;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h4 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.21em;
        color: #9D6B53;
    }
`;

export const Destaque = styled.section`
    grid-area: destaque;
`;

export const Consulta = styled.section`
    grid-area: consulta;
`;

export const Noticias = styled.section`
    grid-area: noticias;
`;