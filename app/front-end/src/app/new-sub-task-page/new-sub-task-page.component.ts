import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskServiceService } from '../task-view/task-service.service';

@Component({
  selector: 'app-new-sub-task-page',
  templateUrl: './new-sub-task-page.component.html',
  styleUrls: ['./new-sub-task-page.component.css']
})
export class NewSubTaskPageComponent implements OnInit {

  id:any
  
  constructor(private taskService: TaskServiceService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id = params._listId
    })
  }


  createTask(title:string){
    this.taskService.createTask(this.id,title).subscribe((result=>console.log(result)))
  }

  createNewTask(title: string) {
    return this.createTask(title)
  }
}