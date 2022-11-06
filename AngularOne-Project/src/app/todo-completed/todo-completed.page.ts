import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Task } from '../classes/task.class';

@Component({
  templateUrl: './todo-completed.page.html',
  styleUrls: ['./todo-completed.page.scss'],
})
export class TodoCompletedPage implements OnInit {
  constructor(private TodoService: TodoService) {}

  TimeoutPage = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.TimeoutPage = true;
    }, 2000);
  }

  complArr: Task[] = this.TodoService.arrTaskCompl;
}
