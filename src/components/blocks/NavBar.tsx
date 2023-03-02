import { Box, Container } from "@mui/material";
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
            <Box sx={ { width: "100%", py: "25px", background: red[600] } }>
                <Container sx={ { maxWidth: "100%", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" } }>
                    <h1>TODO</h1>
                    <Box>
                        {!currentUser?.email ?
                            <>
                                <ButtonNav onClick={() => dispatch(openModalAuth(0))}>Зарегистрироваться</ButtonNav>
                                <ButtonNav onClick={() => dispatch(openModalAuth(1))}>Войти</ButtonNav>
                            </>
                            : <ButtonNav onClick={() => auth.signOut().then(() => dispatch(deleteUser()))}>Выйти</ButtonNav>
                        }
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default NavBar;