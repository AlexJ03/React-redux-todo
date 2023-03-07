import ControllerBtn from "../components/elements/ControllerBtn";
import ModalCreateTask from "../components/blocks/ModalCreateTask";
import {Box, CircularProgress, Container, Stack} from "@mui/material";
import TasksMap from "../components/blocks/TasksMap";
import ButtonsNavTasksGroups from "../components/blocks/ButtonsNavTasksGroups";
import { useAppSelector } from "../app/hooks";
import ModalCreateGroup from "../components/blocks/ModalCreateGroup";
import GroupsMap from "../components/blocks/GroupsMap";
import ModalSettingsGroups from "../components/blocks/ModalSettingsGroups";
import {useEffect, useState} from "react";

const HomePage = () => {
    const btnTasksGroups = useAppSelector(state => state.btnTaskGroup.tab);
    const user = useAppSelector(state => state.userAuth);
    const [progress, setProgress] = useState<boolean>(true);

    useEffect(() => {
        if (user.email && user.uid) {
            setProgress(false);
        }
    }, [user.email, user.uid]);

    return (
        <>
            <Box sx={ { width: "100%", height: "80vh", pt: "30px" } }>
                <Container sx={ { maxWidth: "1000px", display: "flex", justifyContent: "center", overflowX: "hidden" } }>
                    {progress ? <CircularProgress size={55} sx={{position: "absolute", top: "35%"}}/> :
                        <Box>
                            <Stack direction="column" spacing={4}>
                                <ButtonsNavTasksGroups/>
                                {btnTasksGroups === 0 ? <TasksMap/> : <GroupsMap/>}
                            </Stack>
                        </Box>
                    }
                </Container>
            </Box>

            <ModalSettingsGroups />
            <ModalCreateGroup />
            <ModalCreateTask />
            <ControllerBtn />
        </>
    )
}

export default HomePage;