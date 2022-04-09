import { TaskStatus } from "../task.model";

export class CreateTaskDto {
    title: string;
    description: string;
}

export class PatchTaskDto {
    title: string;
    description: string;
    status: TaskStatus
}