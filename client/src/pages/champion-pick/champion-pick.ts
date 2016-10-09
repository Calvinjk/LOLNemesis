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
    // var arr = this.params.get('id');
    this.http.get("/championImages.json").subscribe(data => {
      let arr = JSON.parse(data.text());
      console.log("here", arr);
    });
  }
  dismiss() {
      console.log(this.champions);
    this.viewCtrl.dismiss();
  }
  insertChampion(champion) {
    this.viewCtrl.dismiss(this.champion);
  }
}