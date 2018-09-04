import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title: string = "My courses";

  etat: boolean = false;

  courses = ['Laravel', 'Symfony', 'VueJS'];
  nom = '';

  course = {
    title: 'Formation sur ANGULAR Framework',
    avis: 100.3782,
    prix: 1230.38,
    datePublication: new Date(),
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis sed consectetur, consequatur tempora nesciunt saepe amet debitis blanditiis. Id dicta amet delectus culpa quidem? Neque esse in praesentium beatae eligendi."
  }

  constructor() { }

  ngOnInit() {
  }


  ajouter() {
    if(this.nom != "") {
      this.courses.push(this.nom);
      this.nom = "";
    }
  }

  change(){
     this.etat = !this.etat;   
  }

  add(myName) {
      console.log(myName.value);
  }

  delete(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
    
  }

}
