import {Box, Container, Typography} from "@mui/material";
import ButtonMainPage from "../components/elements/ButtonMainPage";
import { useAppDispatch } from "../app/hooks";
import { openModalAuth } from "../features/ModalAuthSlice";

const MainPage = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <Box width="100%">
                <Container sx={ { maxWidth: "1000px", height: "45vh", display: "flex", justifyContent: "center" } }>
                    <Box sx={ { marginTop: { xs: "120px", sm: "130px", md: "170px" } } }>
                        <Typography sx={ { fontSize: { xs: "25px", sm: "30px", md: "45px", lg: "60px" }, fontWeight: "500", color: "black", textAlign: "center" } }>Организуйте свою работу и жизнь вместе с TODO!</Typography>
                        <Box sx={ { display: "flex", justifyContent: "center", marginTop: "50px" } }>
                            <ButtonMainPage onClick={() => dispatch(openModalAuth(0))}>Начать</ButtonMainPage>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default MainPage;