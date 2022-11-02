import styled from "styled-components";
import { darken, transparentize, lighten } from "polished";

export const Container = styled.div`
    padding: 25px 0;
    height: 100vh;
    width: 270px;

    background-color: ${lighten(0.0, '#6149DB')};

`


export const Content = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    
    height: 100%;

    justify-content: space-around;

    @media (max-width: 1000px){
        justify-content: initial;
        gap: 50px;
    }

    div.logo {
        display: flex;
        align-items: center;
        gap: 10px;

        h2 {
            margin-top: 8px;
            color: white;
        }
    }

    h3 {
        color: white;
        font-weight: normal;
    }

    nav {
        
        ul {
            display: flex;
            flex-direction: column;
            gap: 10px;

            list-style: none;
            padding: 0;

            .nav-link {
                display: flex;
                gap: 20px;
                align-items: center;
                padding: 8px;
                cursor: pointer;
            
                text-decoration: none;
                list-style: none;

                &:hover {
                    transition: 0.5s;
                    background-color: white;

                    border-radius: 30px 0 0px 30px;

                    h3 {
                        color: #6149DB;
                    }
                    
                    .nav-icon {
                        color: #6149DB;
                    }
                    
                }

            }
        }
    }

    footer {
        display: flex;
        gap: 15px;

        color: white;
    }

`