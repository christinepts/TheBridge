import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database';

import {User } from '../models/user';

import { Observable } from 'rxjs/Observable';
import { LoginPage } from '../login/login';
import firebase from 'firebase';




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

// shoppingListRef$: FirebaseListObservable<shoppingItem[]>

profileDataRef:AngularFireObject<User[]>;
profileData: Observable<User[]>;
  
  constructor(
    private fire: AngularFireAuth, 
    private afDatabase: AngularFireDatabase, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
  ) {
  
  }
  
ionViewWillLoad(){
  this.fire.authState.take(1).subscribe(data => {
   this.profileDataRef = this.afDatabase.object('profile/'+data.uid)
   this.profileData = this.profileDataRef.valueChanges();
  
  })
 }
 

 logout() {
   //sign out button method 
  firebase.auth().signOut().then(() => {
    this.navCtrl.parent.parent.setRoot(LoginPage);
  })
}
 }


 // https://github.com/rajayogan/ionic3chat-ep8 - profile image style link 