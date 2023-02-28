import { Button } from "@mui/material";
import { FC } from "react";
import { IButtonNavProps } from "../../types";

const ButtonNav: FC<IButtonNavProps> = ({ children}) => {

    return (
        <Button variant="outlined" sx={ { borderColor: "white", color: "white", "&:hover": {opacity: "0.9", borderColor: "white"} } }>{children}</Button>
    )
}

export default ButtonNav;