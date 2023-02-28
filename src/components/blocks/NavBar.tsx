import { Box, Container } from "@mui/material";
import { red } from '@mui/material/colors';
import ButtonNav from "../elements/ButtonNav";

const NavBar = () => {

    return (
        <Box sx={ { width: "100%", py: "25px", background: red[600] } }>
            <Container sx={ { maxWidth: "100%", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" } }>
                <h1>TODO</h1>
                <Box>
                    <ButtonNav>Зарегистрироваться</ButtonNav>
                    <ButtonNav>Войти</ButtonNav>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar;