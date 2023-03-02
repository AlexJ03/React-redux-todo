import { IControllerBtnItems } from "./types";
import AddTaskIcon from '@mui/icons-material/AddTask';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

export const controllerBtnItems: IControllerBtnItems[] = [
    { name: "Создать группу", Icon: WorkspacesIcon, nameFunc: "createGroup" },
    { name: "Создать задачу", Icon: AddTaskIcon, nameFunc: "createTask" }
];

