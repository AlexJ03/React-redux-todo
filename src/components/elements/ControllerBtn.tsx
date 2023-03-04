import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {controllerBtnItems} from "../../data";
import {useAppDispatch} from "../../app/hooks";
import {openModalCreateTask} from "../../features/ModalTaskSlice";
import {ControllerBtnNameFunc} from "../../types";
import {openModalCreateGroup} from "../../features/ModalCreateGroupSlice";

const ControllerBtn = () => {
    const dispatch = useAppDispatch();

    const controllerFunc = (nameFunc: ControllerBtnNameFunc) => {
        switch (nameFunc) {
            case "createTask":
                dispatch(openModalCreateTask());
                break;
            case "createGroup":
                dispatch(openModalCreateGroup());
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
