import styled from "styled-components";

export const Header = styled.header`
    section:first-child {
        padding: 0px 21%;
        height: 40px;
        display: flex;
        align-items: center;
        background-color: #333333;
        h2, span {
            font-size: 14px;
            letter-spacing: 0.21em;
            color: #FCB900;
        }
        span {
            background-color: #FCB900; 
            color: #333333;
            padding: 0px 2px;   
        }
    }
    section:last-child {
        justify-content: space-evenly;
        height: 130px;
        display: flex;
        align-items: center;
        background-image: url("/images/bg1.png");
        background-repeat: no-repeat;
        background-size: cover;
        .title {
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            display: flex;
            align-items: center;
            gap: 15px;
            h1, span {
                font-size: 25px;
                font-weight: 800;
                line-height: 93.5%;
                color: rgba(255, 255, 255, 0.9);
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
            span {
                font-size: 38px;
            }
        }
        .container {
            width: 490px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            .navigation {
                display: flex;
                justify-content: space-between;
                a {
                    color: white;
                    font-size: 11px;
                    letter-spacing: 0.21em;
                    text-decoration-line: underline;
                    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }
            }
            .buttons {
                display: flex;
                justify-content: space-between;
                button {
                    width: 146px;
                    height: 31px;
                    left: 966px;
                    top: 34px;                
                    background: rgba(255, 255, 255, 0.9);
                    border-bottom: 2px solid #A2130B;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    border-radius: 2px;
                    letter-spacing: 0.21em;
                    color: #333333;
                    cursor: pointer;
                }
                button:hover {
                    background: rgba(162, 19, 11, 0.9);
                    border-bottom: 2px solid #760D07;
                    color: #FFFFFF;
                }
            }
            fieldset {
                background: rgba(255, 255, 255, 0.9);
                box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 2px;
                display: flex;
                align-items: center;
                padding: 5px 0px 5px 10px;
                input {
                    background: none;
                    letter-spacing: 0.21em;
                    font-size: 12px;
                    color: rgba(51, 51, 51, 0.5);
                    padding: 0px 10px;
                }
            }
        }
    }
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: center;
    height: 40px;
    background: #F5F5F5;
    border-bottom: 1px solid #B9B9B9;
    display: flex;
    align-items: center;
    ul {
        display: flex;
        gap: 15px;
        li {
            display: flex;
            align-items: center;
            a {
                font-size: 14px;
                letter-spacing: 0.01em;
                color: #333333;
            }
        }
        .icon {
            margin-left: 40px;
        }
    }
`;

export const Footer = styled.footer`
    height: 100px;
    padding: 5px 0px;
    background: #F3F3F3;
    .direitos {
        margin: 6px 20%;
        letter-spacing: 0.085em;
        font-size: 13px;
        color: #333333;
    }
    section {
        margin: 0 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        padding: 8px;
        border: 1px solid #DDDDDD;
        p, a {
            letter-spacing: 0.085em;
            font-size: 13px;
            color: #333333;
        }
        a {
            display: flex;
            align-items: center;
            gap: 5px
        }
    }
`;