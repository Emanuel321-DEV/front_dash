import { createContext, ReactNode } from "react";
import { api } from "../services/api";
import { formatColumns } from "../utils/formatColumns";
import { formatRows } from "../utils/formatRows";

interface CrudContextProps {

    create: (path: string, body: object) => Promise<any>;
    listAll: (path: string ) => Promise<any>;
    listOne: (path: string, id: string ) => Promise<any>;
    update: (path: string, body: object,  id: string ) => Promise<any>;
    remove: (path: string, id: string) => Promise<any>;
}


interface CrudContextProviderProps {
    children: ReactNode;
}

export const CrudContext = createContext({} as CrudContextProps);

export function CrudContextProvider ({ children }: CrudContextProviderProps){

    async function create (path: string, body: object){

        try {

            const response = await api.post(path, body);

            const data = await response.data;

            return data;

        } 
        catch (error){
            return error;
        }
        


    }

    async function listAll (path: string){
        
        try {

            const response = await api.get(path);



            const data = await response.data;

            if(data[0] === undefined){
                return { data: ['vazio'], columns: ['vazio'] };
            }
    
    
            const { columns } = await formatColumns(data);
            const { rows } = formatRows(path, data);
           
       
    
            return {rows, columns};

        } 
        catch(error){
            console.log(error);
        }
   
    }

    async function listOne(path: string, id: string){
        
        try {

            const response = await api.get(`${path}/${id}`);

            const data = await response.data;

            return data;

        }
        catch (error){
            console.log(error);
        }
    
    }
    
    async function update (path: string, body: object, id: string){
        
        try{
            
            const response = await api.put(`${path}/${id}`, body);

            const data = await response.data;


            return data;

        } 
        catch (error){
            console.log(error);
        }

    }
    
    async function remove (path: string, id: string){
    
        try {
            
            const response = await api.delete(`${path}/${id}`);
            
            const data = await response.data;
        
            return data;

        } 
        catch(error){
            console.log(error);
        }

    }


    return (
        <CrudContext.Provider value={{
            create,
            listAll,
            listOne,
            update,
            remove
        }}>
            { children }
        </CrudContext.Provider>
    )

}