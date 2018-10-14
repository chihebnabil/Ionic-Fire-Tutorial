import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { PhoneAuthPage } from '../pages/phone-auth/phone-auth';
import { PhoneVerifierPage } from '../pages/phone-verifier/phone-verifier';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


const firebaseConfig = { 
  apiKey: "AIzaSyAfV5Ti-kMduSHD6wQsz-4rFp9to3s0Lq8",
  authDomain: "ionicfire-386c5.firebaseapp.com",
  databaseURL: "https://ionicfire-386c5.firebaseio.com",
  projectId: "ionicfire-386c5",
  storageBucket: "ionicfire-386c5.appspot.com",
  messagingSenderId: "968992760856"
}

 @NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    PhoneAuthPage,
    PhoneVerifierPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    PhoneAuthPage,
    PhoneVerifierPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
