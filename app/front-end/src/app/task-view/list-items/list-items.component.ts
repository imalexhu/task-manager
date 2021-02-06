import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  

  lists:any;

  constructor(private taskService: TaskServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskService.getList().subscribe((lists)=>{
      this.lists = lists;
    })
  }


}
