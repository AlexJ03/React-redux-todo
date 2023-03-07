import {Button, ButtonProps, styled} from "@mui/material";
import { FC } from "react";
import { IChildrenProps } from "../../types";
import {red} from "@mui/material/colors";

const ButtonNav: FC<IChildrenProps> = ({ children, onClick}) => {

    const ButtonNav = styled(Button)<ButtonProps>(({ theme }) => ({
        color: "white",
        borderColor: "white",
        backgroundColor: "transparent",
        '&:hover': {
            backgroundColor: "white",
            color: red[600],
            borderColor: "white"
        },
    }));

    return (
        <ButtonNav onClick={onClick} variant="outlined">{ children }</ButtonNav>
    )
}

export default ButtonNav;