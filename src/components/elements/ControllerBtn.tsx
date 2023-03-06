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
import {getGroupsRealTime} from "../../firebase";

const ControllerBtn = () => {
    const dispatch = useAppDispatch();
    const [groups, setGroups] = useState<IGroup[] | null>();
    const email = useAppSelector(state => state.userAuth.email);

    useEffect(() => {
        getGroupsRealTime(email!, setGroups);
    });

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
            default:
                break;
        }
    };

    return (
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 100, right: 150 }}
                icon={<SpeedDialIcon />}
            >
                {(groups && groups.length > 0) ? <SpeedDialAction
                    key="Управление группами"
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
