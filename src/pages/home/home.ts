import { Component } from '@angular/core';
import { NavController, AlertController, MenuController, NavParams } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database';

import { ChatPage } from './../chat/chat';
import { RegisterPage } from './../register/register';
import { UserService } from './../../providers/user/user';


import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../pages/models/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;
  
 name: string= '';
 message: string ='';


  constructor(
     public navCtrl: NavController,
     private fire: AngularFireAuth,
    public navParams: NavParams,
    public afDatabase: AngularFireDatabase
  ) {
this.user.name = this.navParams.get(name);

  }

  ionViewDidLoad(){

  }
  chat(){
    this.navCtrl.push(ChatPage);
  }

}
