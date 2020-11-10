import { PriorityIdModel } from './priority-id-model';

export interface Group {
    groupId: string;
    priorityTemplates: PriorityIdModel[];
}
