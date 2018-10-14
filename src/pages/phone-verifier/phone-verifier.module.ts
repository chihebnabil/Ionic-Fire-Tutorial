import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneVerifierPage } from './phone-verifier';

@NgModule({
  declarations: [
    PhoneVerifierPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneVerifierPage),
  ],
})
export class PhoneVerifierPageModule {}
