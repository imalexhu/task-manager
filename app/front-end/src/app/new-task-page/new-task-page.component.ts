import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-view/task-service.service';
@Component({
  selector: 'app-new-task-page',
  templateUrl: './new-task-page.component.html',
  styleUrls: ['./new-task-page.component.css']
})
export class NewTaskPageComponent implements OnInit {

  constructor(private taskService : TaskServiceService) { }

  ngOnInit(): void {
  }

  createNewList(title:string){
    this.taskService.createList(title).subscribe((res)=>{
      
    })
  }

}
