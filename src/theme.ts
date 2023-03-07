import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    },
    palette: {
        primary: {
            light: '#757ce8',
            main: red[600],
            dark: red[400],
            contrastText: '#fff',
        },
    }
});