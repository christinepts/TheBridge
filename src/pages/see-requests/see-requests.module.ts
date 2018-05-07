import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeeRequestsPage } from './see-requests';

@NgModule({
  declarations: [
    SeeRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(SeeRequestsPage),
  ],
})
export class SeeRequestsPageModule {}
