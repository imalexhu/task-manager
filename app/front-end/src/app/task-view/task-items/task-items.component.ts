import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {

  tasks: any

  constructor(private taskService: TaskServiceService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params)
        this.taskService.getTasks(params._listId).subscribe((tasks) => {
          this.tasks=tasks
        })
      })
  }
}