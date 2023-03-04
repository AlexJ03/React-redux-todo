import { useEffect, useState } from "react";
import { getTasksRealTime } from "../../firebase";
import { useAppSelector } from "../../app/hooks";
import { ITask } from "../../types";
import Task from "../elements/Task";
import { Stack, Typography } from "@mui/material";

const TasksMap = () => {
    const [tasks, setTasks] = useState<ITask[] | null>(null);
    const { email } = useAppSelector(state => state.userAuth);

    useEffect(() => {
        if (email) {
            getTasksRealTime(email!, setTasks);
        }
    }, [email]);

    return (
        <>
            {
                email ? <Stack direction="column" spacing={2}>
                    {
                        (tasks !== null && tasks.length > 0) ? tasks.map(({title, group, id}: ITask) => <Task title={title}
                                                                                                       group={group} id={id}
                                                                                                       key={id}/>) :
                            <Typography sx={ { textAlign: "center" } }>Задач нет</Typography>
                    }
            </Stack>
            : <p>Загрузка</p>
            }
        </>
    )
}

export default TasksMap;