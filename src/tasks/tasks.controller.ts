import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }
    
    @Get("obj")
    getAnSampleObj(): object {
        return this.tasksService.getObject()
    }

    @Get('getAllUsers')
    getAllUsers(): object[] {
       return this.tasksService.getAllUsers()
    }
}
