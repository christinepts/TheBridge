// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the ProfileImgPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-profile-img',
//   templateUrl: 'profile-img.html',
// })
// export class ProfileImgPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }



// }
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ImgProvider } from '../../providers/img/img';
import { UserService } from '../../providers/user/user';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the ProfilepicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile-img',
  templateUrl: 'profile-img.html'
})
export class ProfileImgPage {
  imgurl = 'https://firebasestorage.googleapis.com/v0/b/the-bridge-497db.appspot.com/o/BlankProfileImg.png?alt=media&token=37347848-4c78-45cb-a94a-dcc85f8f4899';
  moveon: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public imgservice: ImgProvider,
    public zone: NgZone, public userservice: UserService, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
  
  }

  // chooseimage() {
  //   let loader = this.loadingCtrl.create({
  //     content: 'Please wait'
  //   })
  //   loader.present();
  //   this.imgservice.uploadimage().then((uploadedurl: any) => {
  //     loader.dismiss();
  //     this.zone.run(() => {
  //       this.imgurl = uploadedurl;
  //       this.moveon = false;
  //     })
  //   })
  // }

  // updateproceed() {
  //   let loader = this.loadingCtrl.create({
  //     content: 'Please wait'
  //   })
  //   loader.present();
  //   this.userservice.updateimage(this.imgurl).then((res: any) => {
  //     loader.dismiss();
  //     if (res.success) {
  //       this.navCtrl.setRoot(TabsPage);
  //     }
  //     else {
  //       alert(res);
  //     }
  //   })
  // }

  // proceed() {
  //   this.navCtrl.setRoot(TabsPage);
  // }


  // was going to use a profile image page to store profile image and link it to edit profile page but did not function
  // https://github.com/rajayogan/ionic3chat-ep8 - code from Raja Yogan 
}
