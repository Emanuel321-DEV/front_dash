import styled from 'styled-components'


export const TableStyle = styled.div`
    
    height: 485px;
    width: 100%;
    margin-left: 5px;
    margin-top: 3px;
    @media (max-width: 1000px){
        width: 100%;
    }
    div.header-table {
        display: flex;
        align-items: center;
        justify-content: space-between;
        div.logo {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        button {
            border: '1px solid #6149DB';
            border-radius: 40px;
            cursor: pointer;
            min-width: 30px;                    
        }
    }
`