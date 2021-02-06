import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class WebRequestService {

  readonly ROOT_URL

  constructor(private http: HttpClient) {
    // send web-request to create a list
    this.ROOT_URL = "http://localhost:3000"
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`)
  }

  post(uri: string, body: object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, body)
  }

  patch(uri: string, body: object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, body)
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`)
  }

}
