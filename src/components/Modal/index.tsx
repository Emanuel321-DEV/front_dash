import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { CrudContext } from '../../contexts/ApiContext';
import { AddCircle, Edit, Delete } from '@mui/icons-material';

interface BasicModalProps {
    path: string;
    httpMethod: string;
    entityProps: any; 
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

export function BasicModal({ path, httpMethod, entityProps }: BasicModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { handleSubmit, register } = useForm();
  const { create, update, remove } = useContext(CrudContext);

  const entityProperties = httpMethod === 'post' ? Object.keys(entityProps): Object.keys({id: '', ...entityProps, });



  async function handleCreateOrUpdate (data: any){
    if(httpMethod === 'post'){

        await create(path, data);

        handleClose();

        window.location.reload()
      
        return;
    } else if ( httpMethod === 'put'){


      const response = await update(path, data, data.id);


        handleClose();

        window.location.reload()

        return;

    } else if (httpMethod === 'delete'){
        await remove(`${path}`, data.id);

        handleClose();
        window.location.reload()


        return;
    }

  }  


  return (
    <div>
      <Button onClick={handleOpen}>{httpMethod === 'post'? <AddCircle color="info" /> : httpMethod === 'put'? <Edit color="warning"/>: <Delete color="error"/>} </Button>
      
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
                    entityProperties.map((prop, index) => (
                        <TextField 
                            {...register(prop)}
                            id={prop}
                            name={prop}
                            type="text"
                            required
                            label={`Insert your ${prop}`}
                        />
                    )) 
                ) : httpMethod === 'put' ? (

                    entityProperties.map((prop, index) => (
                        <TextField 
                            {...register(prop)}
                            id={prop}
                            name={prop}
                            type="text"
                            required
                            label={`Insert your ${prop}`}
                        />
                    )) 

                ): httpMethod === 'delete' ? (
                <TextField 
                  {...register('id')}
                  id='id'
                  name='id'
                  type="text"
                  required
                  label={`Insert your id`}
              /> ): (<h1>Method not allowed</h1>)}

                <Button variant="contained" type="submit">{httpMethod}</Button>

                </form>
            </Box>
      </Modal>
    </div>
  )
}
