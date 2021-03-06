import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../pages/models/user"; 
import { AngularFireAuth } from 'angularfire2/auth';

import { TabsPage } from './../tabs/tabs';
import { RegisterPage } from '../register/register';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  user = {} as User;

  constructor(private fire: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
      
    }

 
  async signIn(user: User) {
    try {
      //uses firebase authenticaion for login 
      const result = this.fire.auth.signInWithEmailAndPassword(user.email, this.user.password);
      if (result) {
        this.navCtrl.setRoot(TabsPage);// function will need to be updated with better security functions
      }  
    }
    catch (e) {
      console.error(e);
    }
  }
//requires function for incorrect password 



  register() {
    this.navCtrl.push(RegisterPage);
  }
}


