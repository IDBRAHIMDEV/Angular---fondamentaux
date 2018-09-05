import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  etat: boolean = false;
  post = { title: '', body:'', id: 0, userId: 0 };
  myPosts = [];
  operation = false;
  constructor(public postService: PostService) { }

  ngOnInit() {
    this.recupPosts();
  }

   recupPosts() {
    this.postService.getPosts().subscribe(posts => {
      this.myPosts = posts.json()
    }, 
    error => {
      alert('problem')
    }
    )
   }

   savePost() {
     this.postService.storePost(this.post).subscribe(post => {
       console.log(post);
       this.post.id = post.json().id;
       this.myPosts.unshift(this.post);
       this.post = { title: '', body:'', id: 0, userId: 0 };
       this.etat = false;
     }, error => console.log(error))
   }

   deletePost(id, index) {
    
    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
       
        this.postService.removePost(id).subscribe(post => {
          this.myPosts.splice(index, 1);
       })

        Swal(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  
   }

   editPost(post) {
     this.operation = true;
     this.post = post;
     this.etat = true;   
   }
   
   updatePost() {
     this.postService.putPost(this.post).subscribe(() => {
        this.operation = false;
        this.etat = false;
        this.post = { title: '', body:'', id: 0, userId: 0 };
     });
   }
}
