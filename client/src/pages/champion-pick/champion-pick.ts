import {Modal, NavController, NavParams, ViewController} from 'ionic-angular';
import {NemesisPage} from '../nemesis/nemesis';
import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
@Component({
  templateUrl: 'champion-pick.html'
})
export class ChampionPicksPage implements OnInit {
    public champion: any;
    public champions: any;
  constructor(public viewCtrl: ViewController,
    public params: NavParams,
    public http: Http) {
  }
  ngOnInit() {
    var arr = this.params.get('id');
    arr = arr[3];
    var ar = [];
    for (var item in arr){
        ar.push(arr[item])
    }
    this.champions = ar;    
        // this.champions = arr[3];
  }
  dismiss() {
      console.log(this.champions);
    this.viewCtrl.dismiss();
  }
  insertChampion(champion) {
    this.viewCtrl.dismiss(this.champion);
  }
}