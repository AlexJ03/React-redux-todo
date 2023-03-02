import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {controllerBtnItems} from "../../data";

const ControllerBtn = () => {
    return (
        <Box sx={{ height: "100%", transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 30, right: 150 }}
                icon={<SpeedDialIcon />}
            >
                {controllerBtnItems.map(({name, Icon}) => (
                    <SpeedDialAction
                        key={name}
                        icon={<Icon />}
                        tooltipTitle={name}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}

export default ControllerBtn;
