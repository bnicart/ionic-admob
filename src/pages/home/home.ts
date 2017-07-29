import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdMobProProvider } from '../../providers/admob-pro/admob-pro';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AdMobProProvider]
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private adMobPro: AdMobProProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  showBanner(){
  	console.log('showBanner');
  	this.adMobPro.showBanner();
  }
  removeBanner(){
  	console.log('removeBanner');
  	this.adMobPro.removeAds();
  }
  showInterstitial(){
  	console.log('showInterstitial');
  	this.adMobPro.showInterstitial();
  }

}
