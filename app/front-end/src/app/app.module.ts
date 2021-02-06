import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { ListItemsComponent } from './task-view/list-items/list-items.component';
import { TaskItemsComponent } from './task-view/task-items/task-items.component';
import { NewTaskComponent } from './task-view/new-task/new-task.component';
import {HttpClientModule} from '@angular/common/http';
import { NewTaskPageComponent } from './new-task-page/new-task-page.component';
import { NewSubTaskComponent } from './task-view/new-sub-task/new-sub-task.component';
import { NewSubTaskPageComponent } from './new-sub-task-page/new-sub-task-page.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    ListItemsComponent,
    TaskItemsComponent,
    NewTaskComponent,
    NewTaskPageComponent,
    NewSubTaskComponent,
    NewSubTaskPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
