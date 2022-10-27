import { Button, Checkbox, Container, TextField } from "@mui/material";
import DeckIcon from "@mui/icons-material/Deck";
import ImgSignIn from "../images/img1.svg"

import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export function SignIn (){
    return (
        <Container sx={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            alignItems: 'center',
            height: "100vh",
        }} > 
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3
            }}>
                <Box sx={{ display: "flex", alignItems: "center"}}>
                    <DeckIcon color="primary" fontSize="large"/>
                    <h3>Emanudash</h3>
                </Box>
                <h1>Hi, welcome to Emanudash</h1>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                }}>
                    <TextField />
                    <TextField />

                    <Button variant="contained" type="submit">Get Started</Button>

                    <Box>
                        <Checkbox defaultChecked/>
                        <span>I agree to the Terms & conditions </span>
                    </Box>

                    <footer>
                        <span className="signUp">
                            Dont have account ? 
                            <Link to="/signup"> SignUp in here! </Link> 
                        </span>
                    </footer>
                </Box>

            </Box>
            <Box sx={{
                dispĺay: {
                    md: "none"
                },
                width: { 
                    md: 0 
                }
            }}>
                <img src={ImgSignIn} alt="teste"/>
            </Box>
        </Container>
    )
}