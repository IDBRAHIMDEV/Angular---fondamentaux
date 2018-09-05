import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  contacts = ['Email', 'Tel', 'SMS'];
  constructor() { }

  ngOnInit() {
  }

  log(f) {
    console.log(f);
  }

  send(f) {
    
    if(f.valid) {
      console.log(f.value);
    }else {
      console.log('le form pas valid');
    }
    

  }

}
