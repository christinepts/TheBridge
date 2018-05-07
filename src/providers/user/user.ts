import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';

import { FirebaseApp } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject, AngularFireList } from "angularfire2/database";

//import { BaseService } from "../base/base";
import { User } from '../../pages/models/user';
import { File } from '@ionic-native/file';
import * as firebase from 'firebase/app';

 import {AngularFireStorage} from 'firebase/storage';

 @Injectable()
 export class UserService  {

  // users: Observable<User[]>;
  // currentUser: AngularFireObject<User>;

  firedata = firebase.database().ref('/users');

   constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
  ) {
    
  }
  adduser(newuser) {
    var promise = new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(() => {
        this.afAuth.auth.currentUser.updateProfile({
          displayName: newuser.displayName,
          photoURL: 'https://firebasestorage.googleapis.com/v0/b/the-bridge-497db.appspot.com/o/BlankProfileImg.png?alt=media&token=37347848-4c78-45cb-a94a-dcc85f8f4899'
        }).then(() => {
          this.firedata.child(this.afAuth.auth.currentUser.uid).set({
            uid: this.afAuth.auth.currentUser.uid,
            displayName: newuser.displayName,
            photoURL: 'https://firebasestorage.googleapis.com/v0/b/the-bridge-497db.appspot.com/o/BlankProfileImg.png?alt=media&token=37347848-4c78-45cb-a94a-dcc85f8f4899'
          }).then(() => {
            resolve({ success: true });
            }).catch((err) => {
              reject(err);
          })
          }).catch((err) => {
            reject(err);
        })
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }

  updateimage(imageurl) {
    var promise = new Promise((resolve, reject) => {
        this.afAuth.auth.currentUser.updateProfile({
            displayName: this.afAuth.auth.currentUser.displayName,
            photoURL: imageurl      
        }).then(() => {
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid).update({
            displayName: this.afAuth.auth.currentUser.displayName,
            photoURL: imageurl,
            uid: firebase.auth().currentUser.uid
            }).then(() => {
                resolve({ success: true });
                }).catch((err) => {
                    reject(err);
                })
        }).catch((err) => {
              reject(err);
           })  
    })
    return promise;
}
//   private setUsers(uidToExclude: string): void {
//     this.users = this.mapListKeys<User>(
//       this.db.list<User>(`/users`, 
//         (ref: firebase.database.Reference) => ref.orderByChild('name')
//       )
//     )
//     .map((users: User[]) => {      
//       return users.filter((user: User) => user.$key !== uidToExclude);
//     });
//   }

//   private listenAuthState(): void {
//     this.afAuth
//       .authState
//       .subscribe((authUser: firebase.User) => {
//         if (authUser) {
//           console.log('Auth state alterado!');          
//           this.currentUser = this.db.object(`/users/${authUser.uid}`);
//           this.setUsers(authUser.uid);
//         }
//       });
//   }

//   create(user: User, uuid: string): Promise<void> {
//     return this.db.object(`/users/${uuid}`)
//       .set(user)
//       .catch(this.handlePromiseError);
//   }

//   edit(user: {name: string, username: string, photo: string}): Promise<void> {
//     return this.currentUser
//       .update(user)
//       .catch(this.handlePromiseError);
//   }

//   userExists(username: string): Observable<boolean> {
//     return this.db.list(`/users`, 
//       (ref: firebase.database.Reference) => ref.orderByChild('name').equalTo(username)
//     )
//     .valueChanges()
//     .map((users: User[]) => {
//       return users.length > 0;
//     }).catch(this.handleObservableError);
//   }

//   get(userId: string): AngularFireObject<User> {
//     return this.db.object<User>(`/users/${userId}`);
//   }
  // uploadPhoto(file: File, userId: string): firebase.storage.UploadTask {
  //   return this.firebaseApp.storage().ref()
  //    .child('/users/'+ userId)
  //    .put(file);
  // }
  // uploadPhoto(upload: Upload) {
  //   let storageRef = firebase.storage().ref();
  //   this.uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

  //   this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
  //     (snapshot) =>  {
  //       // upload in progress
  //       upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //     },
  //     (error) => {
  //       // upload failed
  //       console.log(error)
  //     },
  //     () => {
  //       // upload success
  //       upload.url = this.uploadTask.snapshot.downloadURL
  //       upload.name = upload.file.name
  //       this.saveFileData(upload)
  //     }
  //   );
  // }
}
