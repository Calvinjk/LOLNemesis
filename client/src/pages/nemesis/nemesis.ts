import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'nemesis.html'
})
export class NemesisPage implements OnInit {
    public stats: any[];
    public userInfo: any;
    public counterInfo: any;
    public synergyInfo: any;
    public champions: any[];
    constructor(public nav: NavController,
        public params: NavParams,
        public http: Http) {

    }

    ngOnInit() {
        this.stats = this.params.get('userInfo');
        this.userInfo = this.stats[0];
        this.counterInfo = this.stats[1];
        this.synergyInfo = this.stats[2];

    }

    pushNemesisPage() {
        console.log(this.stats);

    };




}

