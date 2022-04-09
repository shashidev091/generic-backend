import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { randomUUID } from 'crypto';
import { CreateTaskDto, PatchTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllUsers(): object[] {
    return [
      {
        name: 'Shashi Bhagat',
        bloodGroup: 'A+',
      },
      {
        name: 'Rabita Lakra',
        bloodGroup: 'B+',
      },
    ];
  }

  getObject(): object {
    return {
      name: 'Shashi Bhagat',
      designation: 'Senior Software Engineer',
    };
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((item) => item.id === id);
  }

  deleteTaskById(id: string): Task[] {
    this.tasks = this.tasks.filter((item) => item.id !== id);
    return this.tasks;
  }

  patchTheTask(id: string, field: string, patchTheTask: PatchTaskDto): Task[] {
    this.tasks.forEach((item) => {
      if (item.id === id) {
        item[field] = patchTheTask[field];
      }
    });
    return this.tasks;
  }
}
