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
                
                console.log("CREATE TICKET INTENT");

                const ticketRequest = await api.post(path, body);

                console.log("CREATE TICKET INTENT", ticketRequest);

                const data = await ticketRequest.data;



                return data;

            } else {

            
                const user = await api.post(path, body);
                const data = await user.data;
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
            console.log("ESTE EH O response", response)

            const data = await response.data;

            console.log("ESTE EH O DATA", data)

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

                let companyProps = {...body } ;

                delete companyProps.responsibleName
                delete companyProps.responsibleCep
                delete companyProps.responsiblePhone
                delete companyProps.responsibleHouseNumber
                delete companyProps.id



                const companyRequest = await api.put(`${path}/${id}`, companyProps);
                
                const data = await companyRequest.data;

                const responsibleData = await (await api.get('responsible')).data;

                console.log("PAROU AQUI", responsibleData)

                const findResponsibleRelation = responsibleData.find((responsible: any) => {
                
                    console.log('ID', id, '===', responsible.company)

                    return responsible.company ? responsible.company.id === id : false;

                })

                const responsibleRequest = await api.put(`responsible/${findResponsibleRelation.id}`, {
                    name: body.responsibleName,
                    telephone: body.responsiblePhone,
                    cep: body.responsibleCep,
                    houseNumber: body.responsibleHouseNumber,
                    company: data.id
                })

                
                console.log("RESPONSIBLE REQUEST", responsibleRequest);

                return data;

            } else if(path === 'local'){

                let localProps = { ...body };

                delete localProps.responsibleName
                delete localProps.responsibleCep
                delete localProps.responsiblePhone
                delete localProps.responsibleHouseNumber
                delete localProps.id


                const localRequest = await api.put(`${path}/${id}`, localProps);
                const data = await localRequest.data;


                const responsibleData = await (await api.get('responsible')).data;

                console.log("PAROU AQUI", responsibleData)

                const findResponsibleRelation = responsibleData.find((responsible: any) => {
                
                    console.log('ID', id, '===', responsible.local)

                    return responsible.local ? responsible.local.id === id : false;

                })

                const responsibleRequest = await api.put(`responsible/${findResponsibleRelation.id}`, {
                    name: body.responsibleName,
                    telephone: body.responsiblePhone,
                    cep: body.responsibleCep,
                    houseNumber: body.responsibleHouseNumber,
                    local: data.id
                })

                console.log("RESPONSIBLE REQ", responsibleRequest)


                const ticketRequest = await (await api.get(`ticket`)).data;

                const findTicketRelation = ticketRequest.find((ticket: any) => ticket.local.id === id);

                console.log("FIND TICKET RELATION", findTicketRelation);

                if(findTicketRelation && String(findTicketRelation.status).toUpperCase() === 'CONCLUÍDO' ){
                   
                    const ticketRequest = await (await api.post(`ticket`, { 
                        createdBy: 'empty',
                        receivedBy: 'empty',
                        status: 'PENDENTE',
                        local: data.id
                    })).data;

                    console.log("TICKET REQUEST POST", ticketRequest)

                
                } else if (findTicketRelation && String(findTicketRelation.status).toUpperCase() !== 'CONCLUÍDO') {
                    
                    const ticketRequest = await (await api.put(`ticket/${findTicketRelation.id}`, {
                        createdBy: findTicketRelation.createdBy,
                        receivedBy: findTicketRelation.receivedBy,
                        status: findTicketRelation.status,
                        local: data.id
                    })).data;

                    console.log("TICKET REQUEST PUT", ticketRequest)
                }

                return data;

            } else if (path === 'ticket'){
                
                console.log("BODY ENVIADO PRO TICKET", body)

                delete body.id;

                const ticketRequest = await api.put(`${path}/${id}`, body);

                
                const data = await ticketRequest.data;
                console.log("RESPONSE DATA", data);
                
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