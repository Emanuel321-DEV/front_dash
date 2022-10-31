import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Checkbox, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useContext } from 'react';
import { CrudContext } from '../../contexts/ApiContext';
import { Add } from '@mui/icons-material';

interface BasicModalProps {
    path: string;
    httpMethod: string;
    createEntity: any; 
    updateEntity: any;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 250, sm: 400, md: 400, lg: 400 },
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export function BasicModal({ path, httpMethod, createEntity, updateEntity }: BasicModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { handleSubmit, register } = useForm();
  const { create, update } = useContext(CrudContext);

  const createEntityProperties = Object.keys(createEntity);
  
  const editEntityProperties = Object.keys(updateEntity);
  console.log("ISTO EH UPDATE ENTITY", updateEntity)
  console.log("ISTO EH EDIT ENTITY PROPS", editEntityProperties)



  async function handleCreateOrUpdate (data: any){
    if(httpMethod === 'post'){
        await create(path, data);
        handleClose();

    } else if ( httpMethod === 'update'){
        await update(`${path}`, data, updateEntity.id);

        handleClose();

    } else {
        return;
    }

  }  


  return (
    <div>
      <Button onClick={handleOpen}><Add /></Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form 
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 15
            }}
            onSubmit={handleSubmit(handleCreateOrUpdate)}
            >
                <h1 style={{ textAlign: "center"}}>{path}</h1>
                {httpMethod === 'post'? (
                    createEntityProperties.map((prop, index) => (
                        <TextField 
                            {...register(prop)}
                            id={prop}
                            name={prop}
                            type="text"
                            required
                            label={`Insert your ${prop}`}
                        />
                    )) 
                ) : httpMethod === 'update' ? (

                    editEntityProperties.map((prop, index) => (
                        <TextField 
                            {...register(prop)}
                            id={prop}
                            name={prop}
                            type="text"
                            required
                            label={`Insert your ${prop}`}
                        />
                    )) 

                ): ( <h1>Error</h1>)}

                <Button variant="contained" type="submit">{httpMethod}</Button>

                </form>
            </Box>
      </Modal>
    </div>
  )
}
