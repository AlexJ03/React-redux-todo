import { Box, Container } from "@mui/material";
import ButtonMainPage from "../components/elements/ButtonMainPage";
import { useAppDispatch } from "../app/hooks";
import { openModalAuth } from "../features/ModalAuthSlice";

const MainPage = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <Box width="100%">
                <Container sx={ { maxWidth: "1000px", height: "45vh", display: "flex", justifyContent: "center" } }>
                    <Box sx={ { marginTop: "200px" } }>
                        <h1>Храните все свои дела в TODO!</h1>
                        <Box sx={ { display: "flex", justifyContent: "center", marginTop: "20px" } }>
                            <ButtonMainPage onClick={() => dispatch(openModalAuth(0))}>Начать</ButtonMainPage>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default MainPage;