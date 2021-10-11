import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {LocalData} from 'src/app/model/local-data'
import { Cat } from '../model/cat';
import { CatService } from '../service/cat-service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  cats: Array<Cat> =[]

  

  constructor(private router: Router, private catService:CatService) { }

  

  ngOnInit(): void {
     this.catService.getCats().subscribe(
      successfulResponse => {
        this.cats = successfulResponse;
      },
    errorResponse => {alert(errorResponse)}
    )
  }

  

  redirectToNewFrom() {
    this.router.navigate(["new-cat"])
  }

}
