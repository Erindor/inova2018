import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultorioAddPage } from '../consultorio-add/consultorio-add';

/**
 * Generated class for the ConsultorioListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultorio-list',
  templateUrl: 'consultorio-list.html',
})
export class ConsultorioListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultorioListPage');
  }

  add() {
    // direciona para página de adicionar novo consultório
    this.navCtrl.push(ConsultorioAddPage);
  }

}