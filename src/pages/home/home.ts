import { Component } from '@angular/core';
import { NavController, AlertController, MenuController, NavParams } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 
//import { HttpModule } from '@angular/http';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database';
//import { AuthProvider } from './../../providers/auth/auth'; 
//import { Chat } from '../models/chat';
import { ChatPage } from './../chat/chat';
import { ChatService } from './../../providers/chat/chat';
import { RegisterPage } from './../register/register';
//import { Profile } from '../models/profile';
import { UserService } from './../../providers/user/user';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../pages/models/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
 // chats: Observable<Chat[]>;
  //users: Observable<Profile[]>;

  // view: string = 'chats';

  user = {} as User;
  
 name: string= '';
 message: string ='';

//nameRef$: AngularFireList<any>
  constructor(
 
    // public chatService: ChatService,
    // public menuCtrl: MenuController,
     public navCtrl: NavController,
    // public userService: UserService,
    // private fire: AngularFireAuth,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
this.user.name = this.navParams.get(name);

  }


  sendMessage(){
    this.db.list('/chat').push({
       name: this.name,
       message:this.message
    }).then(()=>{
  
   
      //some error
    })
    this.message = '';
  }
  ionViewDidLoad(){

  }
  // ionViewCanEnter(): Promise<boolean> {
  //   return this.fire.authenticated;
  //  }

  // ionViewDidLoad() {
  //   this.chats = this.chatService.mapListKeys<Chat>(this.chatService.chats)
  //     .map((chats: Chat[]) => chats.reverse()); //load in reverse order 
  //   this.users = this.userService.users;

  //   this.menuCtrl.enable(true, 'user-menu');
  // }

  // filterItems(event: any): void {
  //   let searchTerm: string = event.target.value;

  //   this.chats = this.chatService.mapListKeys<Chat>(this.chatService.chats)
  //     .map((chats: Chat[]) => chats.reverse());
  //   this.users = this.userService.users;

  //   if (searchTerm) {

  //     switch(this.view) {

  //       case 'chats':
  //         this.chats = this.chats
  //           .map((chats: Chat[]) => chats.filter((chat: Chat) => (chat.title && chat.title.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1)));
  //         break;
          
  //       case 'users':
  //         this.users = this.users
  //           .map((users: Profile[]) => users.filter((user: Profile) => (user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)));
  //         break;

  //     }

  //   }
    
  // }

  // onChatCreate(recipientUser: Profile): void {

  //   this.userService
  //     .mapObjectKey<Profile>(this.userService.currentUser)
  //     .first()
  //     .subscribe((currentUser: Profile) => {

  //       this.chatService
  //         .mapObjectKey<Chat>(this.chatService.getDeepChat(currentUser.$key, recipientUser.$key))
  //         .first()
  //         .subscribe((chat: Chat) => {            

  //           if (!chat.title) {              

  //             let timestamp: Object = firebase.database.ServerValue.TIMESTAMP;

  //             let chat1 = new Chat('', timestamp, recipientUser.name, (recipientUser.photo || ''));
  //             this.chatService.create(chat1, currentUser.$key, recipientUser.$key);

  //             let chat2 = new Chat('', timestamp, currentUser.name, (currentUser.photo || ''));
  //             this.chatService.create(chat2, recipientUser.$key, currentUser.$key);

  //           }

  //         });

  //     });

  //   this.navCtrl.push(ChatPage, {
  //     recipientUser: recipientUser
  //   });
  // }

  // onChatOpen(chat: Chat): void {

  //   let recipientUserId: string = chat.$key;    

  //   this.userService.mapObjectKey<Profile>(
  //     this.userService.get(recipientUserId)

  //   )
  //     .first()
  //     .subscribe((user: Profile) => {        

  //       this.navCtrl.push(ChatPage, {
  //         recipientUser: user
  //       });

  //     });

  // }

  // onSignup(): void {
  //   this.navCtrl.push(RegisterPage);
  // }


}
