import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { BaseService } from "../base/base";
import { Message } from '../../pages/models/message';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessageService extends BaseService {

  constructor(
    public db: AngularFireDatabase,
    public http: Http
  ) {
    super();
  }

  // create(message: Message, listMessages: AngularFireList<Message>): Promise<any> {
  //   return Promise.resolve(listMessages.push(message));
  // }

  // getMessages(userId1: string, userId2: string): AngularFireList<Message> {    
  //   console.log(userId1, userId2);
    
  //   return this.db.list(`/messages/${userId1}-${userId2}`, 
  //     (ref: firebase.database.Reference) => ref.limitToLast(30).orderByChild('timestamp')
  //   );
  // }

  // intention was to create mesaages between used could not be used as chat system did not function 
  // https://github.com/rajayogan/ionic3chat-ep8 - code from Raja Yogan 

}
