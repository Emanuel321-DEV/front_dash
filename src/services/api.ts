import axios from "axios";
import history from "../history";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL
})

const token = localStorage.getItem('react-auth-token');


api.defaults.headers.common['Authorization'] = `Bearer ${token}`

api.interceptors.response.use((response)=> {
    return response;
}, 
(error) => {

    if(error.response.data.statusCode === 401){
        
        localStorage.removeItem('react-auth-token')
        
        history.push('/');
        
        window.location.reload();
        console.log("TOKEN EXPIRED.")
    }

})