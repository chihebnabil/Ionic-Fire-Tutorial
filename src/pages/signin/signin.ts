import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

   email: string;
   password : string;

  constructor(public aAuth : AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  login(){
    this.aAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(e => { console.log(e)} )
  }
  goToSignup(){
    this.navCtrl.push(SignupPage)
  }

}
