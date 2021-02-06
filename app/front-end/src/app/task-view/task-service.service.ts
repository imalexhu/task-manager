import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private webRequestService: WebRequestService) { }

  getList() {
    return this.webRequestService.get('lists');
  }

  createList(title: string) {
    // send webRequest to generate new List with name title;
    return this.webRequestService.post('lists', { title })
  }

  getTasks(id:string){
    return this.webRequestService.get(`lists/${id}/tasks`)
  }

  createTask(id:string , title:string){
    return this.webRequestService.post(`lists/${id}/tasks`, {title})
  }
}
