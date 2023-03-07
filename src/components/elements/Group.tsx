import { FC } from "react";
import {IGroup, ITask} from "../../types";
import { ListItemButton, ListItemText, ListItem, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {getGroups, getTasks, updateGroupsFirestore, updateTasksFirestore} from "../../firebase";
import {useAppSelector} from "../../app/hooks";

const Group: FC<IGroup> = ( { title, id, tasks } ) => {
    const email = useAppSelector(state => state.userAuth.email);

    const deleteGroup = async () => {
        const groups = await getGroups(email!);
        const newGroups = (groups && groups.groups) && groups.groups.filter((group: IGroup) => group.title !== title);

        await updateGroupsFirestore(email!, newGroups);

        if (tasks && tasks.length > 0) {
            const allTasks = await getTasks(email!);
            const currentTasks = allTasks.filter((task: ITask) => task.group !== title);

            await updateTasksFirestore(email!, currentTasks);
        }
    };

    return (
        <ListItem
            sx={ { width: "100%" } }
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={deleteGroup}>
                    <DeleteIcon />
                </IconButton>
            }>
        <ListItemButton>
            <ListItemText primary={title} secondary={(tasks && tasks.length > 0) ? `${tasks.length} задач` : "0 задач"} />
        </ListItemButton>
        </ListItem>
    )
}

export default Group;