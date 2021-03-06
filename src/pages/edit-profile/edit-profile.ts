import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import {AngularFireDatabase} from 'angularfire2/database';
import { TabsPage } from '../tabs/tabs';

import { User } from '../models/user';


/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  user ={} as User;

  constructor(
    private fire: AngularFireAuth, 
    private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

createProfile(){ 

  this.fire.authState.take(1).subscribe(auth=>{
    this.afDatabase.object('profile/'+auth.uid).set(this.user)
    .then(() => this.navCtrl.setRoot(TabsPage));
// this function takes the input from the form and adds them to the database under the heading profile in Firebase 
  })
}

}
// https://www.youtube.com/watch?v=uESqBwFVf1Q - Paul Halliday video which was used for the create profile function 