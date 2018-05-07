import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SeeRequestsPage } from '../see-requests/see-requests';
import { MakeRequestPage } from '../make-request/make-request';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  makeRequest(){
    this.navCtrl.push(MakeRequestPage);
  }
  seeRequests(){
    this.navCtrl.push(SeeRequestsPage);
  }

}
