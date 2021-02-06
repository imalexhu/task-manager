import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSubTaskPageComponent } from './new-sub-task-page/new-sub-task-page.component';
import { NewTaskPageComponent } from './new-task-page/new-task-page.component';

import { TaskViewComponent } from './task-view/task-view.component';

const routes: Routes = [
  {path: "",  redirectTo: 'lists', pathMatch: 'full'},
  {path: "new-list" , component : NewTaskPageComponent},
  {path: "lists/:_listId" , component : TaskViewComponent},
  {path: "lists" , component : TaskViewComponent},
  {path: "lists/:_listId/new-task" , component : NewSubTaskPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
