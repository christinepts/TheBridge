import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { SeeRequestsPage } from '../see-requests/see-requests';
import { User } from '../models/user';

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
  user ={} as User;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fire: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
  ) {
  }

  submit(){
    //this section updates the profile of users with the topics and requests made
    //this code was also taken from the profile page 
      this.fire.authState.take(1).subscribe(data=>{
        this.afDatabase.object('profile/'+data.uid).update(this.user)
        .then(() =>this.navCtrl.setRoot(SeeRequestsPage));
        //and then naviage to the requests page where the post can be seen 
    
      })

  }

}
// https://www.youtube.com/watch?v=uESqBwFVf1Q 