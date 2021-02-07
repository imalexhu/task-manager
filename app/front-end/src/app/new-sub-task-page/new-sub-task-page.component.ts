import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from '../task-view/task-service.service';

@Component({
  selector: 'app-new-sub-task-page',
  templateUrl: './new-sub-task-page.component.html',
  styleUrls: ['./new-sub-task-page.component.css']
})
export class NewSubTaskPageComponent implements OnInit {


  constructor(private taskService: TaskServiceService ,private route:ActivatedRoute, private router:Router) { }

  id:string= ""

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id = params._listId
    })
  }


  createTask(title:string){
    this.taskService.createTask(this.id,title).subscribe()
    this.router.navigate(['/lists',this.id])
  }

  createNewTask(title: string) {
    return this.createTask(title)
  }
}