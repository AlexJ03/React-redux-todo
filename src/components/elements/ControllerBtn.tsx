import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {controllerBtnItems} from "../../data";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {openModalCreateTask} from "../../features/ModalTaskSlice";
import {ControllerBtnNameFunc, IGroup} from "../../types";
import {openModalCreateGroup} from "../../features/ModalCreateGroupSlice";
import {openModalSettingsGroups} from "../../features/ModalSettingsGroupsSlice";
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import {useEffect, useState} from "react";
import {auth, getGroupsRealTime} from "../../firebase";
import LogoutIcon from '@mui/icons-material/Logout';
import { isMobile } from "react-device-detect";
import {deleteUser} from "../../features/UserAuthSlice";

const ControllerBtn = () => {
    const dispatch = useAppDispatch();
    const [groups, setGroups] = useState<IGroup[] | null>();
    const email = useAppSelector(state => state.userAuth.email);

    useEffect(() => {
        if (email) {
            getGroupsRealTime(email!, setGroups);
        }
    }, [email]);

    const controllerFunc = (nameFunc: ControllerBtnNameFunc) => {
        switch (nameFunc) {
            case "createTask":
                dispatch(openModalCreateTask());
                break;
            case "createGroup":
                dispatch(openModalCreateGroup());
                break;
            case "settingsGroups":
                dispatch(openModalSettingsGroups());
                break;
            case "logout":
                auth.signOut().then(() => dispatch(deleteUser()));
                break;
            default:
                break;
        }
    };

    return (
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: { xs: 50, sm: 100, md: 150 }, right: { xs: 10, sm: 100, md: 180 } }}
                icon={<SpeedDialIcon />}
            >
                {isMobile ? <SpeedDialAction
                    icon={<LogoutIcon/>}
                    tooltipTitle="Выйти"
                    onClick={() => controllerFunc("logout")}
                /> : null}
                {(groups && groups.length > 0) ? <SpeedDialAction
                    icon={<SettingsInputComponentIcon/>}
                    tooltipTitle="Управление группами"
                    onClick={() => controllerFunc("settingsGroups")}
                /> : null}
                {controllerBtnItems.map(({name, Icon, nameFunc}) => (
                    <SpeedDialAction
                    key={name}
                    icon={<Icon />}
                    tooltipTitle={name}
                    onClick={() => controllerFunc(nameFunc)}
                    />
                ))}
            </SpeedDial>
    );
}

export default ControllerBtn;
