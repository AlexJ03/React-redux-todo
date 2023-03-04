import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FC } from "react";
import { IGroup, ITask } from "../../types";
import Task from "./Task";

const AccordionGroups: FC<IGroup> = ({ id, title, tasks }) => {
    return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id={id}
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    { tasks ? tasks.map((task: ITask) => <Task group={task.group} title={task.title} id={task.id} key={task.id} />) : <p>Задач у этой группы нет</p> }
                </AccordionDetails>
            </Accordion>
    );
}

export default AccordionGroups;