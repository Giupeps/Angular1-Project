import { ToDo } from '../to-do.interface';

export class Task implements ToDo {
  id?: number;
  title: string;
  completed: boolean = false;
  constructor(title: string) {
    this.title = title;
  }
}
