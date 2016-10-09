import {Modal, NavController, NavParams, ViewController} from 'ionic-angular';
import {NemesisPage} from '../nemesis/nemesis';
import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
@Component({
    templateUrl: 'champion-pick.html'
})
export class ChampionPicksPage implements OnInit {
    public champions: any;
    public id: any;
    constructor(public viewCtrl: ViewController,
        public params: NavParams,
        public http: Http) {
    }
    ngOnInit() {
        this.id = this.params.get('id');
        this.http.get("/championImages.json").subscribe(data => {
            let arr = JSON.parse(data.text());
            console.log(arr);
            arr.sort();
            arr.sort(function (a, b) {
                if (a.championName > b.championName) {
                    return 1;
                }
                if (a.championName < b.championName) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            console.log(arr);
            this.champions = arr;
        });
        
    }
    dismiss() {
        console.log(this.champions);
        this.viewCtrl.dismiss();
    }
    insertChampion(champion) {

        champion.id = this.id;
        this.viewCtrl.dismiss(champion);
    }
}