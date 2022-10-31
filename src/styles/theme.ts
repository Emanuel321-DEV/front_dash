import { createTheme } from "@mui/material"
import { lighten } from "polished"

export const theme = createTheme({
    
    typography: {
        fontFamily: 'Roboto'
    },
    palette: {
        background: {
            default: lighten(0.45, 'gray')

        },
        primary: {
            main: '#6149DB',
        },
        secondary: {
            main: lighten(0.45, 'gray')
        }
    }
})