import React from "react";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material";

export interface IChildrenProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export interface ITabPanelProps extends IChildrenProps{
    index: number;
    value: number;
}

export interface IModalAuth {
    open: boolean;
    tab: number;
}

export interface IUserAuth {
    email: string | null;
    uid: string | null;
}

export interface IControllerBtnItems {
    name: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
}