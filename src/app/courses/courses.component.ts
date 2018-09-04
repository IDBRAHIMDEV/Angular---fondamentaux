import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title: string = "My courses";

  courses = ['Laravel', 'Symfony', 'VueJS'];
  nom = '';
  constructor() { }

  ngOnInit() {
  }


  ajouter() {
    if(this.nom != "") {
      this.courses.push(this.nom);
      this.nom = "";
    }
  }

  delete(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
    
  }

}
