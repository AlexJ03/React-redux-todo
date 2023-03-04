import { Box, Typography, Button } from "@mui/material";
import { FC } from "react";
import { ITask } from "../../types";
import { styles_task } from "../../styles";
import { getTasks, updateTasks } from "../../firebase";
import { useAppSelector } from "../../app/hooks";

const Task: FC<ITask> = ( { title, group, id } ) => {

    const { email } = useAppSelector(state => state.userAuth);

    const deleteTask = async () => {
        let tasks = await getTasks(email!);
        let newTasks = tasks.filter((task: ITask) => task.id !== id);

        await updateTasks(email!, newTasks);
    }

    return (
        <Box sx={ styles_task }>
            <Typography sx={ { fontSize: "25px", color: "black" } }>{ title }</Typography>

            <Box>
                <Button onClick={deleteTask}>Выполнена</Button>
                <Button onClick={deleteTask}>Удалить</Button>
            </Box>

        </Box>
    )
}

export default Task;