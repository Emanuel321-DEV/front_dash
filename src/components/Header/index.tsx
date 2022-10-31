import { Autocomplete, TextField, Avatar, Divider } from "@mui/material";
import ResponsiveDrawer from "../Drawer";
import { Container } from "./style";

export function Header () {
    return (
        <Container>
            <ResponsiveDrawer /> 
        
        <span>
            <Autocomplete
                className='input-search'
                id="combo-box-demo"
                onClick={() => {}}
                options={[]}
                sx={{ width: { xs: 150, sm: 250, md: 250, lg: 250  } }}
                renderInput={(params) => <TextField {...params} label="Search"/>}
            />
        </span>
        <div className='user-info'>
            <Avatar alt="avatar" src="http://github.com/Emanuel321-DEV.png"/>
            <div>
                <h3>Emanu</h3>
                        
                <Divider />

                <span>ADM</span>
            </div>

        </div>
    </Container>
    )
}