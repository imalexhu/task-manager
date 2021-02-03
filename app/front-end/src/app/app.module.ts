import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { ListItemsComponent } from './task-view/list-items/list-items.component';
import { TaskItemsComponent } from './task-view/task-items/task-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    ListItemsComponent,
    TaskItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
