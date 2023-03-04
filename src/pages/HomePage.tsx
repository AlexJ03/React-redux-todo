import ControllerBtn from "../components/elements/ControllerBtn";
import ModalCreateTask from "../components/blocks/ModalCreateTask";
import { Box, Container, Stack } from "@mui/material";
import TasksMap from "../components/blocks/TasksMap";
import ButtonsNavTasksGroups from "../components/blocks/ButtonsNavTasksGroups";
import { useAppSelector } from "../app/hooks";

const HomePage = () => {

    let btnTasksGroups = useAppSelector(state => state.btnTaskGroup.tab);

    return (
        <>
            <Box sx={ { width: "100%", height: "80vh", pt: "30px" } }>
                <Container sx={ { maxWidth: "1000px", display: "flex", justifyContent: "center" } }>
                    <Box>
                        <Stack direction="column" spacing={4}>
                            <ButtonsNavTasksGroups />
                            { btnTasksGroups === 0 ? <TasksMap/> : <p>Группы</p> }
                        </Stack>
                    </Box>
                </Container>
            </Box>
            <ModalCreateTask />
                <ControllerBtn />
        </>
    )
}

export default HomePage;