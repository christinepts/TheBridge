//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../../pages/models/posts';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsProvider {

   navCtrl: any;
   posts: any= [];

  postsDataRef:AngularFireObject<any[]>;
postsData: Observable<any[]>;

   constructor(
    private fire: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
   ) {
   //public http: HttpClient
  }
  load(){
  // this.posts=[
    // this.fire.authState.take(1).subscribe(data => {
    //   this.postsDataRef = this.afDatabase.object('posts/'+data.uid)
    //   this.postsData = this.postsDataRef.valueChanges();

     
    //  })
    
   
      //posts will be pulled from a server when finished 
      // ,{name:'Christine Profillidou-Tseriotis', date:'April 11, 2018', topic:'Transport', summary:'I need some help to get a lift to the doctors for an appointment I have...'},
      // {name: this.posts.name, date: this.posts.timestamp, topic: this.posts.topic, summary: this.posts.request}
      // ];
  }
  addItem(){
    //
  }
  editItem(){
    //
  }
  getItem(id){
    //
  }

  // intetion was to use providers for posts if correctly functioned however only displays one post at a time
  
}
