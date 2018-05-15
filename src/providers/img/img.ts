import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import * as firebase from 'firebase/app';

/*
  Generated class for the ImgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImgProvider {
  nativepath: any;
  firestore = firebase.storage();
  constructor(public filechooser: FileChooser) {
    
  }

  // uploadimage() {
  //   var promise = new Promise((resolve, reject) => {
  //       this.filechooser.open().then((url) => {
  //         (<any>window).FilePath.resolveNativePath(url, (result) => {
  //           this.nativepath = result;
  //           (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
  //             res.file((resFile) => {
  //               var reader = new FileReader();
  //               reader.readAsArrayBuffer(resFile);
  //               reader.onloadend = (evt: any) => {
  //                 var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
  //                 var imageStore = this.firestore.ref('/profileimages').child(firebase.auth().currentUser.uid);
  //                 imageStore.put(imgBlob).then((res) => {
  //                   this.firestore.ref('/profileimages').child(firebase.auth().currentUser.uid).getDownloadURL().then((url) => {
  //                     resolve(url);
  //                   }).catch((err) => {
  //                       reject(err);
  //                   })
  //                 }).catch((err) => {
  //                   reject(err);
  //                 })
  //               }
  //             })
  //           })
  //         })
  //     })
  //   })    
  //    return promise;   
  // }

//could not make sense of how to make changes for this project and therefore could not be used 
// https://github.com/rajayogan/ionic3chat-ep8 code from Raja Yogan
}
