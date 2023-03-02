import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {controllerBtnItems} from "../../data";
import {useAppDispatch} from "../../app/hooks";
import {openModalCreateTask} from "../../features/ModalTaskSlice";
import {ControllerBtnNameFunc} from "../../types";

const ControllerBtn = () => {
    const dispatch = useAppDispatch();

    const controllerFunc = (nameFunc: ControllerBtnNameFunc) => {
        switch (nameFunc) {
            case "createTask":
                dispatch(openModalCreateTask());
                break;
            case "createGroup":
                break;
            default:
                break;
        }
    };

    return (
        <Box sx={{ height: "100%", transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 30, right: 150 }}
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
        </Box>
    );
}

export default ControllerBtn;
