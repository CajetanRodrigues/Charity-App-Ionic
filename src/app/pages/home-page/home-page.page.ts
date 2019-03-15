import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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
  constructor(
    public navCtrl : NavController
  ) { }

  ngOnInit() {
    console.log(this.categories);
  }
  goToHomeResultsPage(category : string){
    this.navCtrl.navigateRoot('/home-results/'+category);
  }

}
