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

    console.log("VOU REMOVER SEU TOKEN RIRIRIRI")
    console.log("este eh o erro amigo", error.response.data)

    // localStorage.removeItem('react-auth-token')

    // history.push('/');
    // window.location.reload()

})