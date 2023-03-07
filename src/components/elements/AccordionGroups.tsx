import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FC } from "react";
import { IGroup, ITask } from "../../types";
import Task from "./Task";
import {styles_group} from "../../styles";
import {Box} from "@mui/material";

const AccordionGroups: FC<IGroup> = ({ id, title, tasks }) => {

    return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id={id}
                    sx={styles_group}
                >
                    <Typography sx={ { fontSize: "25px" } }>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={ { display: "flex", justifyContent: "center" } }>
                    <Box>{ (tasks && tasks.length > 0) ? tasks.map((task: ITask) => <Task group={task.group} title={task.title} id={task.id} key={task.id} />) : <Typography sx={ { textAlign: "center" } }>Задач у этой группы нет</Typography> }</Box>
                </AccordionDetails>
            </Accordion>
    );
}

export default AccordionGroups;