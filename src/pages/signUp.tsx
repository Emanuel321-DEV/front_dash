import { Button, Checkbox, Container, TextField } from "@mui/material";
import DeckIcon from "@mui/icons-material/Deck";
import ImgSignUp from "../images/img2.svg";

import { useForm } from 'react-hook-form';

import history from '../history'

import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CrudContext } from "../contexts/ApiContext";


interface SignUpProps {
    email: string;
    password: string;
}


export function SignUp (){
    const { register, handleSubmit } = useForm();
    const { create } = useContext(CrudContext);
    const [ error, setError ] = useState(false)

    async function handleSignUp({ email, password }: any) {
        
        try {
            const response = await create('user', { email, password });

            console.log(response);

            if(response.email){
                history.push('/')
    
                window.location.reload()
            } else {
                console.log('cai no else')
                setError(true);
            }
            
        } catch(error){
            console.log(error);
        }

    }



    return (
        <Box sx={{ display: 'flex', height: '100vh', padding: 0, margin: "auto", width : {
            xs: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%'
        }}}> 

            <Box sx={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                alignItems: 'center',
                height: "90vh",
                width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '100%'
                },
           
        }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    alignItems: "center",
                    justifyContent: "center",
                    width: {
                        xs: '100%',
                        sm: '100%',
                        md: '50%',
                        lg: '50%'
                    },
            }}>
                    <Box sx={{ display: "flex", alignItems: "center"}}>
                        <DeckIcon color="primary" fontSize="large" sx={{marginBottom: 1, marginRight: 1}}/>
                        <h3>Emanudash</h3>
                    </Box>
                    <h1>Welcome! Create your account</h1>

                    <form 
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 15
                        }}
                        onSubmit={handleSubmit(handleSignUp)}
                    >
                        <TextField 
                            {...register('email')}
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            label="Email" 
                            error={error}
                          
                        />
                        <TextField 
                            {...register('password')}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            label="Password (Ex: 14Champions@)"
                            error={error}
                            helperText='Must contain Numbers, Uppercase, lowercase and special characters'
                        />

                        <Button variant="contained" type="submit">Create account</Button>

                        <Box>
                            <Checkbox defaultChecked/>
                            <span>I agree to the Terms & conditions </span>
                        </Box>

                        <footer>
                            <span className="signUp">
                                Already have an account ? 
                                <Link to="/"> SignIn in here! </Link> 
                            </span>
                        </footer>
                    </form>

                </Box>
                <Box 
                display={{
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex"  
                }}
                sx={{
                    justifyContent: 'center',
                    background: '#6149DB',
                    width: {
                        xs: 0,
                        sm: 0,
                        md: '50%',
                        lg: '50%' 
                    },
                    height: {
                        xs: 0,
                        sm: 0,
                        md: '100%',
                        lg: '122%' 
                    }
                }}>
                    <img style={{
                    }} src={ImgSignUp} alt="teste"/>
                </Box>
            </Box>
        </Box>
    )
}