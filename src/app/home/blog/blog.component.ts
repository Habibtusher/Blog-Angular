import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/blogs.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blog: BlogsService) { }
  userData: any
  ngOnInit(): void {
    this.blog.getBlog().subscribe(data => this.userData = data)
  }

}
