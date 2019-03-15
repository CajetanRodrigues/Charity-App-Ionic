import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  categories = [
    'Education',
    'Health',
    'Farmers',
    'Children'
  ]
  constructor() { }

  ngOnInit() {
    console.log(this.categories);
  }

}
