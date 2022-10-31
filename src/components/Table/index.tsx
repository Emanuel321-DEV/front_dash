
import { Business, Add } from "@mui/icons-material";
import { Box } from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { CrudContext } from "../../contexts/ApiContext";
import { api } from "../../services/api";
import { BasicModal } from "../Modal";
import { TableStyle } from "./style";

interface TableProps {
    pathName: string;
    createEntity: any;
};


export function Table({ pathName, createEntity }: TableProps ){


    const { listAll } = useContext(CrudContext);

    const isFetching = false;
    const [ rows, setRows ]: any = useState([])
    const [columns, setColumns ]: any = useState([])

    useEffect(() => {
        listAll(pathName).then(response => {      
            setRows(response.rows);
            setColumns(response.columns)        
        } );
    
    }, []) 

    return (
        <Box>

            <TableStyle>
         
                <div className='header-table'>
                  <div className='logo'>
                    <Business  color="primary"/>
                    <p>{pathName}</p>
                    <BasicModal path={pathName} httpMethod="post" createEntity={createEntity} updateEntity='' />

                    <BasicModal path={pathName} httpMethod="update" createEntity={createEntity} updateEntity="any" />
                    
                    <BasicModal path={pathName} httpMethod="delete" createEntity={createEntity} updateEntity="any" />

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