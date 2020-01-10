import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {
newCat ={
  name: "",
  age: 0,
  breed:"",
  gender: ""
}
  constructor() { }

  ngOnInit() {
  
  }
  onSave(event){
console.log(this.newCat);
  }
 
}