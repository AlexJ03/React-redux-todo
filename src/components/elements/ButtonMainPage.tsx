import { Button } from "@mui/material";
import { FC } from "react";
import { IChildrenProps } from "../../types";
import { red } from "@mui/material/colors";

const ButtonMainPage: FC<IChildrenProps> = ( { children , onClick} ) => {

    return (
        <Button onClick={onClick} variant="contained" sx={ { background: red[600], fontSize: "20px", width: "300px", height: "50px", color: "white", "&:hover": {opacity: "0.9", background: red[600]} } }>{ children }</Button>
    )
}

export default ButtonMainPage;