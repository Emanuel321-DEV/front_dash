import { People, Business, Person, Map } from "@mui/icons-material";
import { CardItem } from "../CardItem";
import { Container } from "./style";

export function CardList (){

    return (
        <Container>
            <CardItem amount="12" name="Users" icon={<People fontSize="medium"/>}/>
            <CardItem amount="15" name="Companies" icon={<Business fontSize="medium"/>}/>
            <CardItem amount="12" name="Locals" icon={<Map fontSize="medium"/>}/>
        </Container>
    )
}