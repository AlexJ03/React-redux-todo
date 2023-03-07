import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {closeModalCreateTask} from "../../features/ModalTaskSlice";
import {styles_modal_create_task} from "../../styles";
import {Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {addTaskFirestore, getGroups, getGroupsRealTime, updateGroupsFirestore} from "../../firebase";
import {IGroup, ITask} from "../../types";
import { v4 as uuidv4 } from 'uuid';
import MenuGroups from "../elements/MenuGroups";
import {updateGroups, updateTasksInGroup} from "../../functions";
import {removeTitleGroup} from "../../features/TitleGroupSlice";

const ModalCreateTask = () => {
    const modalCreateTask = useAppSelector(state => state.modalTask.open);
    const email = useAppSelector(state => state.userAuth.email);
    const titleGroup = useAppSelector(state => state.titleGroup.title);
    const dispatch = useAppDispatch();

    const [task, setTask] = useState("");
    const [groups, setGroups] = useState<IGroup[] | null>(null);

    useEffect(() => {
        if (email) {
            getGroupsRealTime(email!, setGroups);
        }
    }, [email])

    const createTask = async () => {
        if (task.length > 0) {
            const newTask: ITask = {
                title: task,
                group: titleGroup,
                id: uuidv4(),
            };

            await addTaskFirestore(email!, newTask);

            if (titleGroup) {
                const data = await getGroups(email!);
                let groups = data?.groups;

                let currentGroup = groups.filter((group: IGroup) => group.title === titleGroup)[0];

                const newGroup = updateTasksInGroup(currentGroup, newTask);
                const newGroups = updateGroups(groups, newGroup);

                await updateGroupsFirestore(email!, newGroups);
            }
        }

        setTask("");
        dispatch(closeModalCreateTask());
        dispatch(removeTitleGroup());
    };

    return (
        <div>
            <Modal
                open={modalCreateTask}
                onClose={() => dispatch(closeModalCreateTask())}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles_modal_create_task}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Создать задачу
                    </Typography>
                    <TextField value={task} onChange={(e) => setTask(e.target.value)} sx={ { width: "100%", marginTop: "20px" } } variant="outlined" label="Название задачи" />
                    {(groups && groups.length > 0) ? <MenuGroups/> : null}
                    <Button variant="contained" sx={ { width: "100%", marginTop: "20px" } } onClick={createTask}>Создать</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalCreateTask;