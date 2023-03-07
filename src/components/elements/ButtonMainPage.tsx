import {Button, ButtonProps, styled} from "@mui/material";
import { FC } from "react";
import { IChildrenProps } from "../../types";
import { red } from "@mui/material/colors";

const ButtonMainPage: FC<IChildrenProps> = ( { children , onClick} ) => {

    const ButtonMain = styled(Button)<ButtonProps>(({ theme }) => ({
        color: "white",
        backgroundColor: red[600],
        fontSize: "20px",
        borderRadius: "10px",
        '&:hover': {
            backgroundColor: red[400],
        },
    }));

    return (
        <ButtonMain sx={ { width: { xs: "200px", sm: "300px", md: "400px", lg: "500px" }, height: { xs: "50px", sm: "60px", md: "65px", lg: "70px" } } } onClick={onClick} variant="contained">{ children }</ButtonMain>
    )
}

export default ButtonMainPage;

