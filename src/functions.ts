import { IGroup, ITask } from "./types";

export const updateTasksInGroup = (group: IGroup, task: ITask) => {
    const { title, id, tasks } = group;

    if (tasks !== null && tasks.length > 0) {
        tasks.push(task);
        return { title, id, tasks };
    } else {
        return { title, id, tasks: [task] };
    }
};

export const updateGroups = (groups: IGroup[], group: IGroup) => {
    let newGroups = [];

    for (let i = 0; i < groups.length; i++) {
        if (groups[i].title !== group.title) {
            newGroups.push(groups[i]);
        }
    }

    newGroups.push(group);

    return newGroups;
};

export const updateTasksInGroupDelete = (group: IGroup, task: ITask) => {
    const { title, id, tasks } = group;

    let result = tasks && tasks.filter(taskGroup => taskGroup.id !== task.id);

    return { title, id, tasks: result };
};