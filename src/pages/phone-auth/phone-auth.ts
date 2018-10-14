import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth'
import *  as firebase from 'firebase/app' 

import { HomePage } from '../home/home';

/**
 * Generated class for the PhoneAuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-auth',
  templateUrl: 'phone-auth.html',
})
export class PhoneAuthPage {

  phone : string;
  recaptchaVerifier : any;

  constructor(public alertCtrl : AlertController, public aAuth : AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneAuthPage');
    
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha');
    
  }

  send(){
   let auth  = this.aAuth
   auth.auth.signInWithPhoneNumber(this.phone, this.recaptchaVerifier).then( (res) => {
    this.presentPrompt(res)
   });
  }

  presentPrompt(res) {
    let nvCtrl =  this.navCtrl
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'code',
          placeholder: 'Verification Code'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
        
            res.confirm(data.code).then(function (result) {
              // User signed in successfully.
              var user = result.user;
              console.log(user)
              nvCtrl.push(HomePage)


              return true
        
              // ...
            }).catch(function (error) {
              // User couldn't sign in (bad verification code?)
              // ...
              return false
            });
            
          }
        }
      ]
    });
    alert.present();
  }
}
