import { useEffect, useState } from "react";
import { getGroupsRealTime } from "../../firebase";
import { useAppSelector } from "../../app/hooks";
import { IGroup } from "../../types";
import AccordionGroups from "../elements/AccordionGroups";
import { Typography } from "@mui/material";

const GroupsMap = () => {
    const [groups, setGroups] = useState<IGroup[] | null>(null);
    const { email } = useAppSelector(state => state.userAuth);

    useEffect(() => {
        if (email) {
            getGroupsRealTime(email!, setGroups);
        }
    }, [email]);

    return (
        <div>
            {
                (groups && groups.length > 0) ? groups.map((group: IGroup) => <AccordionGroups id={group.id} key={group.id} title={group.title} tasks={group.tasks} />)
            : <Typography sx={ { marginTop: { xs: "35px", sm: "45px", md: "65px", lg: "100px" }, textAlign: "center", fontSize: { xs: "20px", sm: "25px", md: "30px", lg: "40px" } } }>Создайте свою первую группу!</Typography>
            }
        </div>
    )
}

export default GroupsMap;