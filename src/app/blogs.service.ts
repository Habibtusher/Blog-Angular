import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  constructor(private http: HttpClient) { }
  getBlog() {
    return this.http.get("../../../assets/blogList.json")
  }
}
