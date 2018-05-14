import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
newFriend(){
  //will create new chat in homepage after adding friend 
  //for now simply redirect to chats page
  this.navCtrl.push(HomePage);
}
removeFriend(){
  // would remove from suggestions list 
}
}
