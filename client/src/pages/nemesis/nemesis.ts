import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'nemesis.html'
})
export class NemesisPage {
    constructor(public nav: NavController) {
        var xmlhttp1 = new XMLHttpRequest();
        var url1 = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?dataById=true&api_key=RGAPI-ce8f3488-0df4-4d9c-b42b-9c64b391b722";

        xmlhttp1.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                console.log(myArr);
            }
        };
        xmlhttp1.open("GET", url1, true);
        xmlhttp1.send();
    }





    pushNemesisPage(name) {
        
    };



}

