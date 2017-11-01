import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

  }

  openModal() {
    console.log("open modal");
    let detailModal = this.modalCtrl.create(DetailPage);
    detailModal.present();
  }

}
