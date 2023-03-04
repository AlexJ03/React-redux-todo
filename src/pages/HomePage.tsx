import ControllerBtn from "../components/elements/ControllerBtn";
import ModalCreateTask from "../components/blocks/ModalCreateTask";
import { Box, Container } from "@mui/material";
import TasksMap from "../components/blocks/TasksMap";

const HomePage = () => {

    return (
        <>
            <Box sx={ { width: "100%", height: "80vh", pt: "30px" } }>
                <Container sx={ { maxWidth: "1000px", display: "flex", justifyContent: "center" } }>
                    <TasksMap />
                </Container>
            </Box>
            <ModalCreateTask />
                <ControllerBtn />
        </>
    )
}

export default HomePage;