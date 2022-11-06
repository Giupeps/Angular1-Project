import { Injectable } from '@angular/core';
import { Task } from './classes/task.class';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  arrTask: Task[] = [];

  arrTaskCompl: Task[] = [];

  addTask(item: string) {
    let task: Task = new Task(item);
    this.arrTask.push(task);
  }

  removeTask(item: Task) {
    let index = this.arrTask.indexOf(item);
    this.arrTask.splice(index, 1);
  }
  doneTask(item: Task) {
    let index = this.arrTask.indexOf(item);
    this.arrTask.splice(index, 1);
    this.arrTaskCompl.push(item);
  }
}
