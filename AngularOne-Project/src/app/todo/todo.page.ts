import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Task } from '../classes/task.class';

@Component({
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  constructor(private TodoService: TodoService) {}

  TimeoutPage = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.TimeoutPage = true;
    }, 2000);
  }

  inputTask: string = '';

  arrTask: Task[] = this.TodoService.arrTask;

  addTask() {
    this.TodoService.addTask(this.inputTask);
    this.inputTask = '';
  }

  removeTask(item: Task) {
    this.TodoService.removeTask(item);
  }

  doneTask(item: Task) {
    this.TodoService.doneTask(item);
  }
}
