import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../pages/models/user"; 
import { AngularFireAuth } from 'angularfire2/auth';

import { TabsPage } from './../tabs/tabs';
import { RegisterPage } from '../register/register';
//import { AuthProvider } from './../../providers/auth/auth';
//import { FormBuilder, FormGroup } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 // credentials = {} as User; 


  user = {} as User;
  //public authService: AuthProvider,

  constructor(private fire: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
      
    }
 
 
  async signIn(user: User) {
    try {
      const result = this.fire.auth.signInWithEmailAndPassword(user.email, this.user.password);
      if (result) {
        this.navCtrl.setRoot(TabsPage);
      }  
    }
    catch (e) {
      console.error(e);
    }
  }


//   // firebase.auth().signInWithEmailAndPassword()
//   try {
//     const result = this.fire.auth.signInWithEmailAndPassword(this.credentials.email, this.credentials.password);
//     if (result) {
//       this.navCtrl.setRoot(TabsPage);
//     }  
//   }
//   catch (e) {
//     console.error(e);
//   }
// }
 
//      this.authService.signInWithEmail(this.signinForm.value)
//      .then((result: boolean) => {

//       if (result) {
//         this.navCtrl.setRoot(TabsPage);
//     }

//   }).catch((error: any) => {
//     console.log(error);
    
//   });
// }
  

  register() {
    this.navCtrl.push(RegisterPage);
  }
}


