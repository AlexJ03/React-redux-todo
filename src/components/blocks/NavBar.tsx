import { Box, Container } from "@mui/material";
import { red } from '@mui/material/colors';
import ButtonNav from "../elements/ButtonNav";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import { openModalAuth } from "../../features/ModalAuthSlice";

const NavBar = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <Box sx={ { width: "100%", py: "25px", background: red[600] } }>
                <Container sx={ { maxWidth: "100%", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" } }>
                    <h1>TODO</h1>
                    <Box>
                        <ButtonNav onClick={() => dispatch(openModalAuth(0))}>Зарегистрироваться</ButtonNav>
                        <ButtonNav onClick={() => dispatch(openModalAuth(1))}>Войти</ButtonNav>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default NavBar;