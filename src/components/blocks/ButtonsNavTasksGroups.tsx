import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { buttonsNavGroups } from "../../data";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTab } from "../../features/BtnTasksGroupsSlice";

const ButtonsNavTasksGroups = () => {
    let btnTasksGroups = useAppSelector(state => state.btnTaskGroup.tab);

    const [value, setValue] = useState(btnTasksGroups);
    const dispatch = useAppDispatch();

    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    dispatch(setTab(newValue));
                }}
            >
                { buttonsNavGroups.map(({ label, Icon }) => <BottomNavigationAction label={label} icon={<Icon />} />) }
            </BottomNavigation>
        </Box>
    );
}

export default ButtonsNavTasksGroups;