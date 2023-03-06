import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {styles_modal_create_task} from "../../styles";
import {closeModalSettingsGroups} from "../../features/ModalSettingsGroupsSlice";
import {useEffect, useState} from "react";
import {IGroup} from "../../types";
import {getGroupsRealTime} from "../../firebase";
import Group from "../elements/Group";
import {List} from "@mui/material";

const ModalSettingsGroups = () => {
    const modalSettingsGroups = useAppSelector(state => state.modalSettingsGroups.open);
    const userEmail = useAppSelector(state => state.userAuth.email);
    const dispatch = useAppDispatch();

    const [groups, setGroups] = useState<IGroup[] | null>(null);

    useEffect(() => {
        if (userEmail) {
            getGroupsRealTime(userEmail, setGroups);
        }
    }, [userEmail])

    useEffect(() => {
        if (groups && groups.length === 0) {
            dispatch(closeModalSettingsGroups());
        }
    }, [groups])

    return (
        <div>
            <Modal
                open={modalSettingsGroups}
                onClose={() => dispatch(closeModalSettingsGroups())}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles_modal_create_task}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Управление группами
                    </Typography>

                    <List>
                        {groups && groups.map(({ title, id, tasks }: IGroup) => <Group title={title} id={id} tasks={tasks} key={id} />)}
                    </List>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalSettingsGroups;