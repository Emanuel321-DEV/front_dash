
import { Business, Map, ConfirmationNumber } from "@mui/icons-material";
import { Box } from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { CrudContext } from "../../contexts/ApiContext";
import { api } from "../../services/api";
import { BasicModal } from "../Modal";
import { TableStyle } from "./style";

interface TableProps {
    pathName: string;
    entityProps: any;
};


export function Table({ pathName, entityProps }: TableProps ){


    const { listAll } = useContext(CrudContext);
    const [ rows, setRows ]: any = useState([])
    const [columns, setColumns ]: any = useState([])

    useEffect(() => {
        listAll(pathName).then(response => {      
            setRows(response.rows);
            setColumns(response.columns)        
        } );
        
    }, []) 

    return (
        <Box sx={{width: { xs: "90%" }}}>

            <TableStyle>
         
                <div className='header-table'>
                  <div className='logo'>
                    {pathName === 'company' ? <Business  color="primary"/> : pathName === 'local' ? <Map color="primary"/>: <ConfirmationNumber color="primary"/>}
                    
                    <p>{pathName}</p>
                    <BasicModal path={pathName} httpMethod="post" entityProps={entityProps} />

                    <BasicModal path={pathName} httpMethod="put" entityProps={entityProps} />
                    
                    <BasicModal path={pathName} httpMethod="delete" entityProps={entityProps}/>

                  </div>
        
                </div>
                <DataGrid 
                    className="table"
                    rows={rows ? rows: { field: 'id', headerName: 'ID', width: 90 }}
                    columns={columns ?   columns: { id: 1 }}
                    pageSize={7}
                />
    
            </TableStyle>
        </Box>
        

    )

}