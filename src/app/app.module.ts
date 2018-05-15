import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule }from 'angularfire2/auth';
import{ ContactPage} from '../pages/contact/contact';
import {FileChooser } from '@ionic-native/file-chooser';
import {File} from '@ionic-native/file';
import{FIREBASE_CONFIG} from './app.firebase.config';
import { ProfilePage } from '../pages/profile/profile';
import { SeeRequestsPage } from '../pages/see-requests/see-requests';
import { MakeRequestPage } from '../pages/make-request/make-request';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import {Camera } from '@ionic-native/camera';
import { BaseService } from '../providers/base/base';
import { ChatService } from '../providers/chat/chat';
import { UserService } from '../providers/user/user';
import { HttpModule } from '@angular/http';
import { MessageService } from '../providers/message/message';
import { RegisterPage } from '../pages/register/register';
import { PostsProvider } from '../providers/posts/posts';
import { FilePath } from '@ionic-native/file-path';
import { ImgProvider } from '../providers/img/img';
import { ProfileImgPage } from '../pages/profile-img/profile-img';
import { ChatPage } from '../pages/chat/chat';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    SeeRequestsPage,
    MakeRequestPage, 
    EditProfilePage, 
    ProfileImgPage,
    ChatPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule, 
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage, 
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage, 
    ProfilePage, 
    SeeRequestsPage,
    MakeRequestPage,
    EditProfilePage,
    ProfileImgPage,
    ChatPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImgProvider,
    ChatService,
    UserService,
    File,
    FilePath,
    FileChooser,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostsProvider,

  ]
})
export class AppModule {}
