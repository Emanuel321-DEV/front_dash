import { Button, Checkbox, Container, TextField } from "@mui/material";
import DeckIcon from "@mui/icons-material/Deck";
import ImgSignIn from "../images/img1.svg";
import { useForm } from 'react-hook-form';
import history from '../history'


import { Box } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

interface HandleSignInProps {
    email: string;
    password: string;
}

export function SignIn (){

    const { handleSubmit, register } = useForm();
    const { signIn } = useContext(AuthContext);

    const [ error, setError ] = useState(false);
    const [ message, setMessage ] = useState('')

    async function handleSignIn ({ email, password }: any){

        
        const token = await signIn( email, password )


        if(token.status === 201){
            history.push('/company');

            window.location.reload();

        }
        else {

            setError(true);
            setMessage('Email or password incorrects')

            return;
        }

    }


    return (
        <Container sx={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            alignItems: 'center',
            padding: 3,
            margin: "auto",
            maxHeight: "90vh",
            width: {
                xs: '100%',
                sm: '100%',
                md: '90%',
                lg: '90%'
            },
           
        }} > 
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
           }}>
                <Box sx={{ display: "flex", alignItems: "center"}}>
                    <DeckIcon color="primary" fontSize="large" sx={{marginBottom: 1, marginRight: 1}}/>
                    <h3>Emanudash</h3>
                </Box>
                <h1>Hi, welcome to Emanudash</h1>
                <form 
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 15
                        }}
                        onSubmit={handleSubmit(handleSignIn)}
                    >
                        <TextField 
                            {...register('email')}
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            error={error}
                            helperText={message}
                            label="Insert your email" 
                        />
                        <TextField 
                            {...register('password')}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            error={error}
                            label="Insert your password"
                        
                        />

                        <Button variant="contained" type="submit">SignIn</Button>

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
                    </form>

            </Box>
            <Box 
            display={{
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block"  
            }}
            sx={{
                width: {
                    xs: 0,
                    sm: 0,
                    md: 400,
                    lg: 500  
                }
            }}>
                <img src={ImgSignIn} alt="teste"/>
            </Box>
        </Container>
    )
}