import ControllerBtn from "../components/elements/ControllerBtn";
import ModalCreateTask from "../components/blocks/ModalCreateTask";
import { Box, Container } from "@mui/material";

const HomePage = () => {

    return (
        <>
            <Box sx={ { width: "100%", height: "80vh", pt: "30px" } }>
                <Container sx={ { maxWidth: "1000px", display: "flex", justifyContent: "center" } }>
                    <h1>Задачи</h1>
                </Container>
                <ControllerBtn />
            </Box>
            <ModalCreateTask />
        </>
    )
}

export default HomePage;