import {useState, MouseEvent, useEffect} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {getGroupsRealTime} from "../../firebase";
import {IGroup} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setTitleGroup} from "../../features/TitleGroupSlice";

const MenuGroups = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [groups, setGroups] = useState<IGroup[] | null>(null);
    const open = Boolean(anchorEl);

    let titleGroup = useAppSelector(state => state.titleGroup.title);
    const { email } = useAppSelector(state => state.userAuth);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (email) {
            getGroupsRealTime(email!, setGroups);
        }
    }, [email]);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                { titleGroup ? titleGroup : "Добавить в группу" }
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {(groups && groups.length > 0) && groups.map(({ id, title }: IGroup) => (
                    <MenuItem key={id} onClick={() => {
                        dispatch(setTitleGroup(title));
                        handleClose();
                    }}>
                        { title }
                    </MenuItem>
                ))}
                <MenuItem onClick={() => {
                    dispatch(setTitleGroup(null));
                    handleClose();
                }}>
                    Без группы
                </MenuItem>
            </Menu>
        </div>
    );
}

export default MenuGroups;