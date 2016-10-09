import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ChampionPicksPage } from '../champion-pick/champion-pick';

@Component({
    templateUrl: 'nemesis.html'
})
export class NemesisPage implements OnInit {
    public stats: any[];
    public userInfo: any;
    public counterInfo: any;
    public synergyInfo: any;
    public champions: any[];
    public championImages: any;
    constructor(public nav: NavController,
        public params: NavParams,
        public http: Http,
        public modalCtrl: ModalController) {

    }

    ngOnInit() {
        this.http.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=RGAPI-ce8f3488-0df4-4d9c-b42b-9c64b391b722").map(res => res.json()).subscribe(data => {
        var arr = data;
        this.championImages = Object.keys(arr).map(function(key) {return arr[key];});
        });
        this.stats = this.params.get('userInfo');
        this.userInfo = this.stats[0];
        this.counterInfo = this.stats[1];
        this.synergyInfo = this.stats[2];

    }

    goToModal1() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {id: 1});
        championModal.present();

    };

    goToModal2() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {id: 2});
        championModal.present();
    }
    goToModal3() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {id: 3});
        championModal.present();

    };

    goToModal4() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {id: 4});
        championModal.present();
    }

    goToModal5() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {id: 5});
        championModal.present();

    };

    goToModal6() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {id: 6});
        championModal.present();
    }
    goToModal7() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {id: 7});
        championModal.present();

    };

    goToModal8() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {id: 8});
        championModal.present();
    }

    goToModal9() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {id: 9});
        championModal.present();
    }
    
    goToModal10() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {id: 10});
        championModal.present();
    }

    goToModalMid() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': this.championImages});
        console.log(this.championImages);
        championModal.present();
    }




}

