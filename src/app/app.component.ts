import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  title = 'capgeminicasa';
  etat: boolean = true;
  currentPost = {}; 
  myCourse = "Laravel";
  posts = [
    {content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam nesciunt error ad? In debitis neque ab, consequuntur tenetur temporibus tempore, adipisci aliquid, cupiditate impedit exercitationem veniam dignissimos ullam provident!", favorite: true, id: 1, title: 'Formation Angular', description: 'description of this post 1'},
    {content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam nesciunt error ad? In debitis neque ab, consequuntur tenetur temporibus tempore, adipisci aliquid, cupiditate impedit exercitationem veniam dignissimos ullam provident!", favorite: false, id: 2, title: 'Formation VueJS', description: 'description of this post 2'},
    {content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam nesciunt error ad? In debitis neque ab, consequuntur tenetur temporibus tempore, adipisci aliquid, cupiditate impedit exercitationem veniam dignissimos ullam provident!", favorite: false, id: 3, title: 'Formation JAVA EE', description: 'description of this post 3'},
    {content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam nesciunt error ad? In debitis neque ab, consequuntur tenetur temporibus tempore, adipisci aliquid, cupiditate impedit exercitationem veniam dignissimos ullam provident!", favorite: true, id: 4, title: 'Formation AdonisJS', description: 'description of this post 4'},
  ];


  methodOnApp($event, post) {
    post.favorite = $event;
    console.log('Iam in app component :', $event);
  }

  toggle(post) {
    this.currentPost = post;
  }


}
