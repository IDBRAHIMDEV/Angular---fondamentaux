import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  
  id = 0;
  post = {id: 0, title: '', body: '', userId: 0};
  constructor(public postService: PostService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.show(); 
  }

  show() {
    this.postService.getPost(this.id).subscribe(post => this.post = post.json());
  }

}
