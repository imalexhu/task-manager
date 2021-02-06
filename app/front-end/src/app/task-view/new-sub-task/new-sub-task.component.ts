import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-new-sub-task',
  templateUrl: './new-sub-task.component.html',
  styleUrls: ['./new-sub-task.component.css']
})
export class NewSubTaskComponent implements OnInit {

  id:any

  constructor(private taskService : TaskServiceService, private route:ActivatedRoute, private router : Router, private location: Location ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id = params._listId
    })
  }
  
  createNewTasks(){
    this.router.navigateByUrl(`lists/${this.id}/new-task`)
  }

}
