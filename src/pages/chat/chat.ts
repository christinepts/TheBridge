import { Component, ViewChild } from '@angular/core';
import { Content, NavController, NavParams } from 'ionic-angular';

import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';

//import { AuthProvider } from './../../providers/auth/auth';
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
  // @ViewChild(Content) content: Content;
  // messages: AngularFireList<Message>;
  // viewMessages: Observable<Message[]>;
  // pageTitle: string;
  // sender: User;
  // recipient: User;
  // private chat1: AngularFireObject<Chat>;
  // private chat2: AngularFireObject<Chat>;

  constructor(
    //public authService: AuthProvider,
    // public chatService: ChatService,
    // public messageService: MessageService,
    // public navCtrl: NavController,
    // public navParams: NavParams,
    // public userService: UserService,
      public db: AngularFireDatabase
  ) {
  }



   ionViewDidLoad() {
 
     
   }

  //   this.recipient = this.navParams.get('recipientUser');
  //   this.pageTitle = this.recipient.name;

  //   this.userService
  //     .mapObjectKey<User>(this.userService.currentUser)
  //     .first()
  //     .subscribe((currentUser: User) => {
  //       this.sender = currentUser;

  //       this.chat1 = this.chatService.getDeepChat(this.sender.$key, this.recipient.$key);
  //       this.chat2 = this.chatService.getDeepChat(this.recipient.$key, this.sender.$key);

  //       if (this.recipient.photo) {
  //         this.chatService
  //           .mapObjectKey(this.chat1)
  //           .first()
  //           .subscribe((chat: Chat) => {
  //             this.chatService.updatePhoto(this.chat1, chat.photo, this.recipient.photo);
  //           });
  //       }

  //       let doSubscription = () => {
  //         this.viewMessages = this.messageService.mapListKeys<Message>(this.messages);
  //         this.viewMessages
  //           .subscribe((messages: Message[]) => {
  //             this.scrollToBottom();
  //           });
  //       };

  //       this.messages = this.messageService
  //         .getMessages(this.sender.$key, this.recipient.$key);

  //       this.messages
  //         .valueChanges()
  //         .first()
  //         .subscribe((messages: Message[]) => {

  //           if (messages.length === 0) {

  //             this.messages = this.messageService
  //               .getMessages(this.recipient.$key, this.sender.$key);

  //             doSubscription();

  //           } else {
  //             doSubscription();
  //           }

  //         });

  //     });

  // }

  // sendMessage(newMessage: string): void {

  //   if (newMessage) {

  //     let currentTimestamp: Object = firebase.database.ServerValue.TIMESTAMP;

  //     this.messageService.create(
  //       new Message(
  //         this.sender.$key,
  //         newMessage,
  //         currentTimestamp
  //       ),
  //       this.messages
  //     ).then(() => {

  //       this.chat1
  //         .update({
  //           lastMessage: newMessage,
  //           timestamp: currentTimestamp
  //         });

  //       this.chat2
  //         .update({
  //           lastMessage: newMessage,
  //           timestamp: currentTimestamp
  //         });


  //     });

  //   }

  // }

  // private scrollToBottom(duration?: number): void {
  //   setTimeout(() => {
  //     if (this.content._scroll) {
  //       this.content.scrollToBottom(duration || 300);
  //     }
  //   }, 50);
  // }

}
