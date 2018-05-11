import { Component, ViewChild } from '@angular/core';
import { Content, NavController, NavParams } from 'ionic-angular';

import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';

import { Chat } from '../../pages/models/chat';
import { ChatService } from './../../providers/chat/chat';
import { Message } from '../../pages/models/message';
import { MessageService } from './../../providers/message/message';
import { User } from '../../pages/models/user';
import { UserService } from './../../providers/user/user';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  user = {} as User;


  constructor(

    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService,
      public db: AngularFireDatabase
  ) {
  }



   ionViewDidLoad() {
 
     
   }

  
}
