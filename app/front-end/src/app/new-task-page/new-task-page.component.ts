import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from '../task-view/task-service.service';
import {List} from '../models/list.models'
@Component({
  selector: 'app-new-task-page',
  templateUrl: './new-task-page.component.html',
  styleUrls: ['./new-task-page.component.css']
})
export class NewTaskPageComponent implements OnInit {

  constructor(private taskService : TaskServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  createNewList(title:string){
    this.taskService.createList(title).subscribe((response:any)=>{
      this.router.navigate(['lists', response._id])
    })
  }

}
