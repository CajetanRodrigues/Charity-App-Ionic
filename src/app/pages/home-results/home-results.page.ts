import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';

// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { ImagePage } from './../modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage {
  charitytrusts: Observable<any>;
  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  items : any;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public httpClient: HttpClient,
    public route : ActivatedRoute
  ) {
    const category = this.route.snapshot.paramMap.get('category');

    this.charitytrusts = 
    this.
    httpClient.
    get('http://localhost:8080/rest/charity-trust-category/'+category);
    
    this.charitytrusts
    .subscribe(data => {
      console.log('my data: ' +  JSON.stringify(data));
      this.charitytrusts = data;
    });
    
  }
  

  // ionViewWillEnter() {
  //   this.menuCtrl.enable(true);
  //   console.log(this.charityService.getCharityRequests().subscribe(
  //     items => {
  //       console.log(this.items.data);
  //     }
  //   ));
  //   this.charityService.getCharityRequests().subscribe(
  //     items => {
  //       this.items = items;
  //       console.log(this.items);
  //     }
  //   );
  //   this.http.get('http://data.orghunter.com/v1/charitysearch?user_key=0ecbe6e6b1160fd18121f4f65a518a21&searchTerm=medical', {}, {})
  // .then(data => {

  //   console.log(data.status);
  //   console.log(data.data); // data received by server
  //   console.log(data.headers);

  // })
  // .catch(error => {

  //   console.log(error.status);
  //   console.log(error.error); // error message as string
  //   console.log(error.headers);

  // });
    
  
  
  

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }
  goToSingleCharityTrust(object : any){
    this.navCtrl.navigateRoot('/single-charity');
  }
}
