import { useEffect, useState } from "react";
import { getTasksRealTime } from "../../firebase";
import { useAppSelector } from "../../app/hooks";
import { ITask } from "../../types";
import Task from "../elements/Task";
import { Stack, Typography, Box } from "@mui/material";

const TasksMap = () => {
    const [tasks, setTasks] = useState<ITask[] | null>(null);
    const { email } = useAppSelector(state => state.userAuth);

    useEffect(() => {
        if (email) {
            getTasksRealTime(email!, setTasks);
        }
    }, [email]);

    return (
        <Box sx={ { display: "flex", justifyContent: "center", marginBottom: "20px" } }>
            {
                email ? <Stack direction="column" spacing={2}>
                    {
                        (tasks !== null && tasks.length > 0) ? tasks.map(({title, group, id}: ITask) => <Task title={title}
                                                                                                       group={group} id={id}
                                                                                                       key={id}/>) :
                            <Typography sx={ { marginTop: { xs: "35px", sm: "45px", md: "65px", lg: "100px" }, textAlign: "center", fontSize: { xs: "20px", sm: "25px", md: "30px", lg: "40px" } } }>Создайте свою первую задачу!</Typography>
                    }
            </Stack>
            : <p>Загрузка</p>
            }
        </Box>
    )
}

export default TasksMap;