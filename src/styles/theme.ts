import { createTheme } from "@mui/material"
import { lighten } from "polished"

export const theme = createTheme({
    typography: {
        fontFamily: 'Roboto'
    },
    palette: {
        primary: {
            main: '#6149DB',
        },
        secondary: {
            main: lighten(0.45, 'gray')
        }
    }
})