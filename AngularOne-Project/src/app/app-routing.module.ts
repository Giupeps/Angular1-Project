import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCompletedPage } from './todo-completed/todo-completed.page';
import { TodoPage } from './todo/todo.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo',
  },

  {
    path: 'todo',
    component: TodoPage,
  },
  {
    path: 'todocompleted',
    component: TodoCompletedPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
