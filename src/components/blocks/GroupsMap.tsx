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
            : <Typography sx={ { textAlign: "center" } }>Групп нет</Typography>
            }
        </div>
    )
}

export default GroupsMap;