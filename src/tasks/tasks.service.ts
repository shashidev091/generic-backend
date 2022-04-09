import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { randomUUID } from 'crypto';

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
    this.createTask("", "");
      return this.tasks;
  }

  createTask(title: string, description: string): Task {
      console.log(randomUUID())
      const task : Task = {
          id: uuid(),
          title: title,
          description: description,
          status: TaskStatus.OPEN
      }
      return task;
  }
  
}
