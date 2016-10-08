import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: 'nemesis.html'
})
export class NemesisPage implements OnInit{
    public stats: any[];
    public champions: any[];
    constructor(public nav: NavController,
        public params: NavParams) {

    }

    ngOnInit() {
        
        this.getStats();
        console.log('statsssss', this.getStats());

        this.champions = this.getChampions();

        
    }

    getStats(): Observable<any> {
        var xmlhttp1 = new XMLHttpRequest();
        var url1 = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?dataById=true&api_key=RGAPI-ce8f3488-0df4-4d9c-b42b-9c64b391b722";

        var myArr;

        
        return localStorage.getItem('id').then(() => {
            xmlhttp1.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                return JSON.parse(this.responseText);
                // console.log(this.stats);
                // return myArr;
            }
        };
        });
        // xmlhttp1.open("GET", url1, true);
        // xmlhttp1.send();
    }

    getChampions(): any{
        console.log(localStorage.getItem('id'));
        var xmlhttp = new XMLHttpRequest();
        var url = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + localStorage.getItem('id') + "/ranked?season=SEASON2016&api_key=RGAPI-ce8f3488-0df4-4d9c-b42b-9c64b391b722";

        var myArr1;
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                myArr1 = JSON.parse(this.responseText);
                this.champions = myArr1;
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

    }
    pushNemesisPage() {
        console.log(this.stats);

    };




}

