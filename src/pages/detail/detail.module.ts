import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DetailPage),
  ],entryComponents: [
    DetailPage
  ]
})
export class DetailPageModule {}
