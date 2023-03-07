import {Box, Container, Stack, Typography} from "@mui/material";
import { red } from '@mui/material/colors';
import ButtonNav from "../elements/ButtonNav";
import {useAppDispatch} from "../../app/hooks";
import { openModalAuth } from "../../features/ModalAuthSlice";
import {auth, getCurrentAuthUser} from "../../firebase";
import {deleteUser} from "../../features/UserAuthSlice";

const NavBar = () => {
    const dispatch = useAppDispatch();
    const currentUser = getCurrentAuthUser();

    return (
        <>
            <Box sx={ { maxWidth: "100%", py: "25px", background: red[600] } }>
                <Container sx={ { maxWidth: "1400px", color: "white", display: {xs: "block", sm: "flex"}, justifyContent: "space-between", alignItems: "center" } }>
                    <Typography sx={ { fontWeight: "600", fontSize: "30px", textAlign: { xs: "center", sm: "left" } } }>TODO</Typography>
                    <Box sx={ { display: { xs: "none", sm: "block" } } }>
                        {!currentUser?.email ?
                            <Stack direction="row" spacing={1}>
                                <ButtonNav onClick={() => dispatch(openModalAuth(0))}>Зарегистрироваться</ButtonNav>
                                <ButtonNav onClick={() => dispatch(openModalAuth(1))}>Войти</ButtonNav>
                            </Stack>
                            : <ButtonNav onClick={() => auth.signOut().then(() => dispatch(deleteUser()))}>Выйти</ButtonNav>
                        }
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default NavBar;