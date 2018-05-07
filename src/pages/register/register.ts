import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { User } from '../models/user';
import { AngularFireAuth }from 'angularfire2/auth'; 
import { EditProfilePage } from '../edit-profile/edit-profile';
import { UserService } from '../../providers/user/user';
//import { ProfileImgPage } from '../profile-img/profile-img';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  newuser = {
    email: '',
    password: '',
    displayName: ''
  }

  constructor(
    private fire: AngularFireAuth, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController, 
    public loadingCtrl: LoadingController,
    public userservice: UserService
  ) {
  }

  async register(user: User){
    try{
   const result= await this.fire.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
      if(result){
      this.navCtrl.push(EditProfilePage);
      }
  }
    catch(e){
      console.error(e);
    }
  }
//   register(){
//   var toaster = this.toastCtrl.create({
//     duration: 3000,
//     position: 'bottom'
//   });
//   if (this.newuser.email == '' || this.newuser.password == '' || this.newuser.displayName == '') {
//     toaster.setMessage('All fields are required');
//     toaster.present();
//   }
//   else if (this.newuser.password.length < 7) {
//     toaster.setMessage('Password is not strong. Try giving more than six characters');
//     toaster.present();
//   }
//   else {
//     let loader = this.loadingCtrl.create({
//       content: 'Please wait'
//     });
//     loader.present();
//     this.userservice.adduser(this.newuser).then((res: any) => {
//       loader.dismiss();
//       if (res.success)
//         this.navCtrl.push(ProfileImgPage);
//       else
//         alert('Error' + res);
//     })
//   }
// }  

}
