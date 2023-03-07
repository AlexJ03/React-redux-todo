import {Box, Typography, IconButton} from "@mui/material";
import { FC } from "react";
import {IGroup, ITask} from "../../types";
import { styles_task } from "../../styles";
import {getGroups, getTasks, updateGroupsFirestore, updateTasks} from "../../firebase";
import { useAppSelector } from "../../app/hooks";
import {updateGroups, updateTasksInGroupDelete} from "../../functions";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import {green, red} from "@mui/material/colors";

const Task: FC<ITask> = ( { title, group, id } ) => {

    const { email } = useAppSelector(state => state.userAuth);

    const deleteTask = async () => {
        let tasks = await getTasks(email!);
        let newTasks = tasks.filter((task: ITask) => task.id !== id);

        await updateTasks(email!, newTasks);

        if (group !== null) {
            const data = await getGroups(email!);
            let groups = data?.groups;

            let currentGroup = groups.filter(({ title }: IGroup) => title === group)[0];

            const newGroup = updateTasksInGroupDelete(currentGroup, { title, group, id });
            const newGroups = updateGroups(groups, newGroup);

            await updateGroupsFirestore(email!, newGroups);
        }
    }

    return (
        <Box sx={ styles_task }>
            <Typography sx={ { fontSize: "25px", color: "black" } }>{ title }</Typography>
            {group && <Typography sx={{fontSize: "18px", color: "#ccc"}}>{group}</Typography>}

            <Box>
                <IconButton onClick={deleteTask} aria-label="complete">
                    <CheckIcon sx={ { color: green[600], fontSize: "30px" } } />
                </IconButton>
                <IconButton onClick={deleteTask} aria-label="delete">
                    <DeleteIcon sx={ { color: red[600], fontSize: "30px" } } />
                </IconButton>
            </Box>

        </Box>
    )
}

export default Task;