import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { randomUUID } from 'crypto';
import { CreateTaskDto } from './dto/create-task.dto';

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

  getTaskById(id: string): Task[] {
      return this.tasks.filter(item => item.id === id)
  }
}
