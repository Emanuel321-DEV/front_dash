import { Edit, Delete } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useLocation} from "react-router-dom";

export async function formatColumns(data: any){
    let columns =[];

    
    const dataLenght = Object.keys(data[0]).length;
        
    const keys = Object.keys(data[0]);


    for(let index = 0; index <= dataLenght; index++){
        
        if(index !== dataLenght){
            const object = {
                field: keys[index],
                headerName: keys[index],
                width: 150,
            }
            
            columns.push(object)
        } else {
            const object = {
                field: 'options',
                align: 'center',
                width: 130,
                renderCell: (cellValues: any) => {
                  return (
                    <Box display='flex' gap={0}>
                    
                      <Button > <Edit /> </Button> 
                      <Button onClick={() => console.log("Clicou em exclude ", cellValues)}> <Delete color="error"/> </Button>
                    
                    </Box>
      
                  )
                }
            }

            columns.push(object);

        }


    }


    return { columns };
}