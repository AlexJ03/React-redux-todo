import { IButtonNavTasksGroups, IControllerBtnItems } from "./types";
import AddTaskIcon from '@mui/icons-material/AddTask';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const controllerBtnItems: IControllerBtnItems[] = [
    { name: "Создать группу", Icon: WorkspacesIcon, nameFunc: "createGroup" },
    { name: "Создать задачу", Icon: AddTaskIcon, nameFunc: "createTask" },
];

export const buttonsNavGroups: IButtonNavTasksGroups[] = [
    { label: "Мои задачи", Icon: FormatListBulletedIcon },
    { label: "Мои группы", Icon: WorkspacesIcon }
];
