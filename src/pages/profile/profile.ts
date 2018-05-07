import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database';
//import { Profile } from '../models/profile';
import {User } from '../models/user';

import { Observable } from 'rxjs/Observable';
import { LoginPage } from '../login/login';
import firebase from 'firebase';
//import { FirebaseListObservable } from 'angularfire2/database';
//import { User } from '@firebase/auth-types';


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
 
//  editname() {
//   let statusalert = this.alertCtrl.create({
//     buttons: ['okay']
//   });
//   let alert = this.alertCtrl.create({
//     title: 'Edit Name',
//     inputs: [{
//       name: 'name',
//       placeholder: 'Name'
//     }],
//     buttons: [{
//       text: 'Cancel',
//       role: 'cancel',
//       handler: data => {

//       }
//     },
//     {
//       text: 'Edit',
//       handler: data => {
//         if (data.nickname) {
//           this.userservice.updatedisplayname(data.name).then((res: any) => {
//             if (res.success) {
//               statusalert.setTitle('Updated');
//               statusalert.setSubTitle('Your nickname has been changed successfully!!');
//               statusalert.present();
//               this.zone.run(() => {
//                 this.name = data.name;
//               })
//             }

//             else {
//               statusalert.setTitle('Failed');
//               statusalert.setSubTitle('Your nickname was not changed');
//               statusalert.present();
//             }
                           
//           })
//         }
//       }
      
//     }]
//   });
//   alert.present();
// }

 logout() {
   //sign out button method 
  firebase.auth().signOut().then(() => {
    this.navCtrl.parent.parent.setRoot(LoginPage);
  })
}
 }

// export class UserProfilePage {

//   currentUser: User;
//   canEdit: boolean = false;
//   uploadProgress: number;
//   private filePhoto: File;

//   constructor(
//     public authService: AuthProvider,
//     public navCtrl: NavController, 
//     public navParams: NavParams,
//     public userService: UserService
//   ) {
//   }



//   ionViewDidLoad() {
//     this.userService.currentUser
//       .valueChanges()
//       .subscribe((user: User) => {
//         this.currentUser = user;
//       });
//   }

//   onSubmit(event: Event): void {
//     event.preventDefault();
    
//     if (this.filePhoto) {

//       let uploadTask = this.userService.uploadPhoto(this.filePhoto, this.currentUser.$key);

//       uploadTask.on('state_changed', (snapshot: firebase.storage.UploadTaskSnapshot) => {

//         this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

//       }, (error: Error) => {
//         // catch error
//       });

//       uploadTask.then((UploadTaskSnapshot: firebase.storage.UploadTaskSnapshot) => {
//         this.editUser(uploadTask.snapshot.downloadURL);
//       });

//     } else {
//       this.editUser();
//     }

//   }

//   onPhoto(event): void {  
//     this.filePhoto = event.target.files[0];
//   }

//   private editUser(photoUrl?: string): void {
//     this.userService
//       .edit({
//         name: this.currentUser.name,
//         username: this.currentUser.username,
//         photo: photoUrl || this.currentUser.photo || ''
//       }).then(() => {
//         this.canEdit = false;
//         this.filePhoto = undefined;
//         this.uploadProgress = 0;
//       });
//   }

// }