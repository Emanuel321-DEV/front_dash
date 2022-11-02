interface CompanyProps {
    id: string;
    name: string;
    cnpj: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

interface LocalProps {
    id: string;
    name: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    company: CompanyProps;
}

interface ResponsibleProps {
    id: string;
    name: string;
    address: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    company: CompanyProps;
    local: LocalProps;
}

interface TicketProps {
    id: string;
    title: string;
    createdBy: string;
    receivedBy: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    local: LocalProps;
}


export function formatRows (pathName: string, data: any){
    let rows = [];


    switch(pathName){

        case 'company':
            rows = data;
            break;
        case 'local':
            rows = data.map((local: any) => {                    
            
                return {
                    ...local,
                    company: `${local.company.name} - ${local.company.id}`
                }
            })

            break;

        case 'responsible':
            rows = data.map((responsible: ResponsibleProps) => {                    
                return {
                    ...responsible,
                    company: `${responsible.company.name} - ${responsible.company.id}`,
                    local: `${responsible.local.name} - ${responsible.local.id}`,
                }
            })

            break;

        case 'ticket':
            rows = data.map((ticket: TicketProps) => {                    
                return {
                    ...ticket,
                    local: ticket.local ?  `${ticket.local.name} - ${ticket.local.id}`: 'vazio',
                }
            })

            break;
    }

    return { rows };

}