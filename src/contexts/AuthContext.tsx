import { createContext, ReactNode } from "react";
import { api } from "../services/api";
import history from '../history'

interface AuthProviderProps {
    children: ReactNode;
}

interface SignInResponseProps {
    message: string;
    status: number;
}

interface AuthContextProps {
    signIn: ( email: string, password: string ) => Promise<SignInResponseProps>;
    signOut: () => Promise<void>; 
}

export const AuthContext = createContext({} as AuthContextProps);


export function AuthContextProvider ({ children }: AuthProviderProps ){

    async function signIn(email: string, password: string){


        try {
            
            const response = await api.post('/api/auth/login', { email, password });
    
            const { token } = await response.data;
    
            if(token){
                localStorage.setItem('react-auth-token', token);
                return { message: "success", status: 201 };
            }

            return { message: "Error adding token", status: 400}
        
        } 
        catch(error){
            console.log(error);
            return { message: "Error adding token", status: 400}
        }

    }

    async function signOut(){
        localStorage.removeItem('react-auth-token');

        history.push('/')

        window.location.reload()
    
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )



}
