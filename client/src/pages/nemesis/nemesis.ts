import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'nemesis.html'
})
export class NemesisPage implements OnInit {
    public stats: any[];
    public champions: any[];
    constructor(public nav: NavController,
        public params: NavParams,
        public http: Http) {

    }

    ngOnInit() {
        

    }

    pushNemesisPage() {
        

    };




}

