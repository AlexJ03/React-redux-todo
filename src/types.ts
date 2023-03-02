import React from "react";

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