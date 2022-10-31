import styled from "styled-components";

export const Container = styled.header`

    height: 100px;

    color: black;

     
    span { 
        div {
            border-radius: 20px 20px 20px 20px;
        }
    }
    

    display: flex;
    padding: 20px 40px 20px 0;
    align-items: center;
    justify-content: space-between;

    div.user-info {
        display: flex;
        gap: 15px;
    }


    @media (max-width: 1000px){
        h2.pathname {
            display: none;
        }
    }

    @media (max-width: 800px){
        div.user-info {
            display: none;
        }

    }


`