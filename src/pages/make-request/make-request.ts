import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SeeRequestsPage } from '../see-requests/see-requests';
import { Posts } from '../models/posts';

/**
 * Generated class for the MakeRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make-request',
  templateUrl: 'make-request.html',
})
export class MakeRequestPage {
  posts ={} as Posts;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fire: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
  ) {
  }

  submit(){
      this.fire.authState.take(1).subscribe(data=>{
        this.afDatabase.object('posts/'+data.uid).set(this.posts)
        .then(() =>this.navCtrl.setRoot(SeeRequestsPage));
    
      })
  }

}
