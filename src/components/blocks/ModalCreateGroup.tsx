import Box from "@mui/material/Box";
import { styles_modal_create_group } from "../../styles";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closeModalCreateGroup } from "../../features/ModalCreateGroupSlice";
import { useState } from "react";
import {createGroupFirestore} from "../../firebase";
import {IGroup} from "../../types";
import {v4 as uuidv4} from "uuid";

const ModalCreateGroup = () => {
    const modalGroup = useAppSelector(state => state.modalCreateGroup.open);
    const userData = useAppSelector(state => state.userAuth);
    const dispatch = useAppDispatch();

    const [group, setGroup] = useState("");

    const createGroup = async () => {
        if (group.length > 0) {
            const newGroup: IGroup = {
                title: group,
                id: uuidv4(),
                tasks: null
            }
            await createGroupFirestore(userData.email!, newGroup);
        }

        setGroup("");
        dispatch(closeModalCreateGroup());
    };

    return (
        <div>
            <Modal
                open={modalGroup}
                onClose={() => dispatch(closeModalCreateGroup())}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles_modal_create_group}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Создать группу
                    </Typography>
                    <TextField value={group} onChange={(e) => setGroup(e.target.value)} sx={ { width: "100%", marginTop: "20px" } } variant="outlined" label="Название группы" />
                    <Button onClick={createGroup}>Создать</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalCreateGroup;