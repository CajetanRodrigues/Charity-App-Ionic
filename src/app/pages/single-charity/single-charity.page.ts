import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NavController } from '@ionic/angular';
import { Http, Headers, RequestOptions } from '@angular/common/http';

@Component({
  selector: 'app-single-charity',
  templateUrl: './single-charity.page.html',
  styleUrls: ['./single-charity.page.scss'],
})
export class SingleCharityPage implements OnInit {

  CharityObject : Observable<any>;
  charityTrusts: Observable<any>;
  constructor(public route : ActivatedRoute,
    public httpClient : HttpClient,
    public navCtrl : NavController,
    ) { 
    const id = this.route.snapshot.paramMap.get('id')
    this.CharityObject =  this.
    httpClient.
    get('http://localhost:8080/rest/charity-trust-by-id/'+id);
    
    this.CharityObject
    .subscribe(data => {
      console.log('my data: ' +  JSON.stringify(data));
      this.CharityObject = data;
    });
    console.log(this.CharityObject);
  }

  ngOnInit() {
  

    
  }
  goBack(){
    this.navCtrl.navigateRoot('/home-page');
  }
  amount : number
  donate(amount){
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json' );
    // const requestOptions = new RequestOptions({ headers: headers });
    console.log(this.amount);
    this.charityTrusts =
    this.
    httpClient.
    get('http://localhost:8080/rest/charity-trust-funds/1/'+this.amount);
    
    this.charityTrusts
    .subscribe(data => {
      console.log('my data: ' +  JSON.stringify(data));
      this.charityTrusts = data;
      console.log(this.charityTrusts);
    });
  }

}
