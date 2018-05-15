import { Component, ViewChild } from '@angular/core';
import { Content, NavController, NavParams } from 'ionic-angular';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../pages/models/user';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  user = {} as User;
  
 name: string= '';
 message: string ='';


  constructor(

    public navCtrl: NavController,
    public navParams: NavParams,
    public afDatabase: AngularFireDatabase
  ) {
  }
   ionViewDidLoad() {
 
     
   }
   sendMessage(){
    //uses the message in messsage box and pushes to firebase 
    //the idea is to pull the name from the database and store both in chat 
    this.afDatabase.list('/chat').push({
       name: this.name,
       message:this.message
    }).then(()=>{
  
      //some error
    })
    this.message = '';
  }
  
}
