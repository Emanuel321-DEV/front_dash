import { Phone, Mail, GitHub, LinkedIn, WhatsApp, Map } from "@mui/icons-material";
import { Box, Button, Container, TextField } from "@mui/material";
import ResponsiveDrawer from "../components/Drawer";
import ImageContact from '../images/contact.svg'

export function Contact (){
    return ( 
        <Container>
            <ResponsiveDrawer />
            <Box 
                sx={{
                    display: "flex",
                    gap: 15,
                    marginTop: 5
                }}
            >
                <Box display={{
                    xs: 'none',
                    sm: 'flex',
                    md: 'flex',
                    lg: 'flex'
                }} sx={{ flexDirection: "column", gap: 3, width: '60%'}}>
                    <h1>Let's Talk</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit nobis distinctio ut eos velit maiores quos doloremque quia, ipsam dolor, laudantium nulla consequuntur? Dignissimos amet tempora incidunt expedita eius?</p>

                    <TextField label="Your name" variant="outlined"/>
                    <TextField label="Your email" variant="outlined" type="email"/>
                    <TextField 
                        label="Your message" 
                        variant="outlined" 
                        size="medium"
                        multiline
                        rows={5}
                        maxRows={5}
                    />

                    <Button sx={{
                        width: "200px",
                        padding: "10px",
                        borderRadius: "30px",
                        color: "white",
                        backgroundColor: "#6149DB",
                    }}>Send Message</Button>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'center',
                    gap: 5,
                    width: { 
                        xs: '100%',
                        sm: '100%',
                        md: '40%',
                        lg: '40%'
                    },

                }}> 
                    <img width={350} src={ImageContact} alt="" />

                    <ul>
                        <li><Map color="disabled"/> Orlando Martins Gomes, 50, Araguari-MG</li>
                        <li><Phone color="disabled"/> (34) 99926-8588 </li>
                        <li> <Mail color="disabled"/> emanuelcontact01@gmail.com </li>
                    </ul>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5}}>
                        <GitHub fontSize="large"/>
                        <LinkedIn fontSize="large" color="success"/>
                        <WhatsApp fontSize="large" color="info"/>
                    </Box>

                </Box>
            </Box>

        </Container>
    
    ) 
}