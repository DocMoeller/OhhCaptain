import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaptainPage } from './captain';
import { CaptaincardComponent } from '../../components/captaincard/captaincard';


@NgModule({
  declarations: [
    CaptainPage
  ],
  imports: [
    IonicPageModule.forChild(CaptainPage),
    CaptaincardComponent
  ],
    
})
export class CaptainPageModule { }
