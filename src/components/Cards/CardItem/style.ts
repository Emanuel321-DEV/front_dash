import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    width: 200px;
    height: 150px;

    // background-color: #6149DB;
    background-color: white;

    box-shadow: 0.3px 0.3px 0.3px 0.3px;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
        transition: 0.8s;

        background-color: var(--blue-main);
        
        color: white;
        
        h2 { color: white; }

        svg {

            color: white;
        }

    }

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
       
    
    h2 {
        color: black;
        span {
            font-size: 12px;
        }
        
        
    }
    




`