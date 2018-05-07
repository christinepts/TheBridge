import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostsProvider} from '../../providers/posts/posts';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { HomePage } from '../home/home';
import { Posts } from '../models/posts';


/**
 * Generated class for the SeeRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-see-requests',
  templateUrl: 'see-requests.html',
})
export class SeeRequestsPage {

  postsDataRef:AngularFireObject<Posts[]>;
  postsData: Observable<Posts[]>;
  
  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     public Posts: PostsProvider,
     private fire: AngularFireAuth,
     private afDatabase: AngularFireDatabase,
    ) {
  } 
  ionViewWillLoad() {
  this.Posts.load();
  // this.fire.authState.take(1).subscribe(data => {
  //   this.postsDataRef = this.afDatabase.object('posts/'+data.uid)
  //   this.postsData = this.postsDataRef.valueChanges();
   
  //  })
  }

  submit() { 
    this.navCtrl.push(HomePage);
    // function did not work on provider page (the navCtrl was not accepted)
  }


}
