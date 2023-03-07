import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { buttonsNavGroups } from "../../data";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTab } from "../../features/BtnTasksGroupsSlice";
import { Typography } from "@mui/material";

const ButtonsNavTasksGroups = () => {
    let btnTasksGroups = useAppSelector(state => state.btnTaskGroup.tab);

    const [value, setValue] = useState(btnTasksGroups);
    const dispatch = useAppDispatch();

    return (
        <Box sx={{ width: "100%", paddingTop: "10px", marginBottom: "30px" }}>
            <BottomNavigation
                sx={ { width: "100%", height: "100%" } }
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    dispatch(setTab(newValue));
                }}
            >
                { buttonsNavGroups.map(({ label, Icon }) => <BottomNavigationAction sx={ { width: "300px", marginLeft: { xs: "20px", sm: "30px", md: "40px" } } } key={label} label={<Typography sx={ { fontSize: { xs: "17px", sm: "20px" } } }>{label}</Typography>} icon={<Icon sx={ { fontSize: {xs: "30px", sm: "35px", md: "38px"} } } />} />) }
            </BottomNavigation>
        </Box>
    );
}

export default ButtonsNavTasksGroups;