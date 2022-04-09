import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDto, PatchTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('obj')
  getAnSampleObj(): object {
    return this.tasksService.getObject();
  }

  @Get('getAllUsers')
  getAllUsers(): object[] {
    return this.tasksService.getAllUsers();
  }

  //   @Post()
  //   async createTask(
  //     @Body('title') title: string,
  //     @Body('description') description: string,
  //   ): Promise<Task> {
  //     return this.tasksService.createTask(title, description);
  //   }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Delete('/:id')
  async deleteTaskById(@Param('id') id: string): Promise<Task[]> {
    return this.tasksService.deleteTaskById(id);
  }

  @Patch('/:id/:field')
  async patchTaskById(
    @Param('id') id: string,
    @Param('field') field: string,
    @Body() patchTaskDto: PatchTaskDto,
  ): Promise<Task[]> {
    return this.tasksService.patchTheTask(id, field, patchTaskDto);
  }
}
