import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  atext;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.atext = "this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text this is a very long text";
    console.log('ionViewDidLoad DetailPage');
  }
}
