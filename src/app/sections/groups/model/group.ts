import { PriorityIdModel } from './priority-id-model';

export class Group {
    groupId: string;
    priorityTemplates: PriorityIdModel[];

    constructor(groupId: string, priorityTemplates: PriorityIdModel[]) {
        this.groupId = groupId;
        this.priorityTemplates = priorityTemplates;
    }
}
