import { createContext, ReactNode } from "react";
import { api } from "../services/api";
import { formatColumns } from "../utils/formatColumns";
import { formatRows } from "../utils/formatRows";

interface CrudContextProps {

    create: (path: string, body: object) => Promise<any>;
    listAll: (path: string ) => Promise<any>;
    listOne: (path: string, id: string ) => Promise<any>;
    update: (path: string, body: object, id: string) => Promise<any>;
    remove: (path: string, id: string) => Promise<any>;
}


interface CrudContextProviderProps {
    children: ReactNode;
}

export const CrudContext = createContext({} as CrudContextProps);

export function CrudContextProvider ({ children }: CrudContextProviderProps){

    async function create (path: string, body: any){

        try {

            if(path === 'company'){

                let companyProps = body;

                const responsible = {
                    name: body.responsibleName, 
                    cep: body.responsibleCep,
                    telephone: body.responsiblePhone, 
                    houseNumber: body.responsibleHouseNumber,
                }
                console.log("ESTE EH O BODY", body)
                console.log("ESTE EH O RESPONSIBLE", responsible)


                delete companyProps.responsibleName
                delete companyProps.responsibleCep
                delete companyProps.responsiblePhone
                delete companyProps.responsibleHouseNumber

                const companyRequest = await api.post(path, companyProps);
                const data = await companyRequest.data;

                console.log("este eh CoMPANY data \n\n\n\n\n\n", data)


                const responsibleProps = {
                    ...responsible,
                    company: data.id,
                }

                console.log("ESTE EH O RESPONSIBLE BODY", responsible)

                const responsibleRequest = await api.post('responsible', responsibleProps);
                
                console.log("este eh RESPONSIBLE data \n\n\n\n\n\n", responsibleRequest)
    
                return data;

            } else if(path === 'local'){

                let localProps = body;
                
                const responsible = {
                    name: body.responsibleName, 
                    cep: body.responsibleCep,
                    telephone: body.responsiblePhone, 
                    houseNumber: body.responsibleHouseNumber,
                }
                
                delete localProps.responsibleName
                delete localProps.responsibleCep
                delete localProps.responsiblePhone
                delete localProps.responsibleHouseNumber

                const localRequest = await api.post(path, localProps);
                const data = await localRequest.data;


                console.log("local data", data)

                const responsibleProps = {
                    ...responsible,
                    local: data.id,
                }

                const responsibleRequest = await api.post('responsible', responsibleProps);
    
                return data;

            } else if (path === 'ticket'){
                
                const ticketRequest = await api.post(path, body);

                const data = await ticketRequest.data;

                return data;

            }

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
    
    async function update (path: string, body: any, id: string){
        
        try{

            if(path === 'company'){

                let companyProps = body;

                delete companyProps.responsibleName
                delete companyProps.responsibleCep
                delete companyProps.responsiblePhone
                delete companyProps.responsibleHouseNumber

                const companyRequest = await api.put(`${path}/${id}`, companyProps);
                const data = await companyRequest.data;
    
                return data;

            } else if(path === 'local'){

                let localProps = body;

                delete localProps.responsibleName
                delete localProps.responsibleCep
                delete localProps.responsiblePhone
                delete localProps.responsibleHouseNumber

                const localRequest = await api.put(`${path}/${id}`, localProps);
                const data = await localRequest.data;
    
                return data;

            } else if (path === 'ticket'){
                
                const ticketRequest = await api.post(path, body);

                const data = await ticketRequest.data;

                return data;

            }

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