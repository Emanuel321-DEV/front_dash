import DeckIcon from "@mui/icons-material/Deck";
import BusinessIcon from '@mui/icons-material/BusinessOutlined';
import MapIcon from '@mui/icons-material/MapOutlined';
import ConfirmationNumber from '@mui/icons-material/ConfirmationNumberOutlined'
import Divider from "@mui/material/Divider";
import ContactPageIcon from "@mui/icons-material/ContactPageOutlined";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";

import { Container, Content } from "./style";
import { Avatar } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

interface NavProps {
    display: string;
}


export function Nav ({ display }: NavProps){
    const { signOut } = useContext(AuthContext);

    return (
        <span style={{ display: display }}>
            <Container>
                <Content>
                    <div className="logo">
                        <DeckIcon color="secondary" fontSize="large"/>
                        <h2>Emanudash</h2>
                    </div>

                    <nav>
                        <ul> 
                          
                            <li>
                                <Link className="nav-link" to="/company">  <BusinessIcon className="nav-icon" color="secondary"/> <h3>Companies</h3> </Link>
                            </li>
                            <li> 
                                <Link className="nav-link" to="/local"> 
                                    <MapIcon className="nav-icon" color="secondary"/> <h3>Locais</h3>
                                </Link>
                            </li>
                            

                            <li>  
                                <Link className="nav-link" to="/ticket"> 
                                    <ConfirmationNumber className="nav-icon" color="secondary"/> <h3>Tickets</h3>
                                </Link>
                            </li>
                        
                            <Divider />

                            <li> 
                                <Link className="nav-link" to="/contact"> 
                                    <ContactPageIcon className="nav-icon" color="secondary"/> <h3>Contact</h3>                                
                                </Link>

                            </li>

                            <li onClick={signOut}> 

                                <span className="nav-link">
                                    <LogoutIcon className="nav-icon" color="secondary"/> <h3>Logout</h3>

                                </span>
                            </li>
                        </ul>
                    </nav>

                    <footer>

                        <Avatar alt="avatar" src="http://github.com/Emanuel321-DEV.png"/>
                        <div>
                            <h3>John Doe</h3>
                            
                            <Divider />

                            <span>Gerente</span>
                        </div>

        
                    </footer>

                </Content>
            </Container>
        </span>
    )
}