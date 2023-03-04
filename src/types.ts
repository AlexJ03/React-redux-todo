import React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export interface IChildrenProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export interface ITabPanelProps extends IChildrenProps{
    index: number;
    value: number;
}

export interface IModalTask {
    open: boolean;
}

export interface IModalAuth extends IModalTask {
    tab: number;
}

export interface IUserAuth {
    email: string | null;
    uid: string | null;
}

export type ControllerBtnNameFunc = "createGroup" | "createTask";

export interface IControllerBtnItems {
    name: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
    nameFunc: ControllerBtnNameFunc;
}

export interface ITask {
    title: string;
    group: string | null;
    id: string;
}

export interface IButtonNavTasksGroups {
    label: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
}

export interface IGroup {
    title: string;
    tasks: ITask[] | null;
    id: string;
}