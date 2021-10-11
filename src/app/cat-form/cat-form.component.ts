import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cat, NewCat } from '../model/cat';
import { LocalData } from '../model/local-data';
import { CatService } from '../service/cat-service';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {

  newCat:NewCat = {
    name: "",
    breed: "",
    description: "",
  likes:0  }
 
  catNameFormControl = new FormControl("", Validators.required)
  catBreedFormControl = new FormControl()
  catDescriptionFormControl = new FormControl()
  catImageFormControl = new FormControl()

  constructor(private router: Router,
    private catService: CatService) { }

  ngOnInit(): void {
  }

  saveCat(){
    if(!this.catNameFormControl.valid){
      alert("From not valid")
      return
    }
    this.newCat.name = this.catNameFormControl.value
    this.newCat.breed = this.catBreedFormControl.value
    this.newCat.description = this.catDescriptionFormControl.value
    this.newCat.image = this.catImageFormControl.value
    
    this.catService.createCat(this.newCat).subscribe(
      response => {this.router.navigate(["cats"])},
      error => {alert("Could not save cat")}
      )
    
     
    
  }

}
