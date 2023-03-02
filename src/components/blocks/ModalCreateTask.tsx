import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {closeModalCreateTask} from "../../features/ModalTaskSlice";
import {styles_modal_create_task} from "../../styles";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {addTaskFirestore, getCurrentAuthUser} from "../../firebase";
import {ITask} from "../../types";

const ModalCreateTask = () => {
    const modalCreateTask = useAppSelector(state => state.modalTask.open);
    const dispatch = useAppDispatch();

    const [task, setTask] = useState("");

    const createTask = async () => {
        if (task.length > 0) {
            const newTask: ITask = {
                title: task,
                group: null,
                id: task,
            };
            const currentUser = getCurrentAuthUser();
            await addTaskFirestore(currentUser?.email!, newTask);
        }
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
                    <Button onClick={createTask}>Создать</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalCreateTask;