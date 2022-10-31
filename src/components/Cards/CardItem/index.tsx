import { ReactNode } from "react";
import { Container, Content } from "./style";

interface CardItemProps {
    amount: string;
    name: string;
    icon: ReactNode;
}

export function CardItem ( { amount, icon, name }: CardItemProps ) {

    return (

        <Container>

            <Content> 
                <h2>{amount} <br/> <span>All {name}</span></h2>
                <span className="card-item"> {icon} </span>
            </Content>

        </Container>

    )
}