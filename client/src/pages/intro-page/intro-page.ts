import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NemesisPage } from '../nemesis/nemesis';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'intro-page.html'
})
export class IntroPage {
  public summoner = {
    name: ""
  }
  public userArr: any[];
  public id: any;
  constructor(public nav: NavController, public http: Http) {
  }

  pushNemesisPage(name) {

    this.http.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + name + "?api_key=RGAPI-ce8f3488-0df4-4d9c-b42b-9c64b391b722").subscribe(data => {
        // this.userArr = data;
        console.log(data);
    });



    // var xmlhttp = new XMLHttpRequest();
    // var url = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + this.summoner.name + "?api_key=RGAPI-ce8f3488-0df4-4d9c-b42b-9c64b391b722";

    // xmlhttp.onreadystatechange = function () {
    //   if (this.readyState == 4 && this.status == 200) {
    //     let splitVal = this.responseText.search(":");
    //     var myArr = JSON.parse(this.responseText.slice(splitVal + 1, -1));
    //     // console.log(myArr.id);
    //     localStorage.setItem('id', (myArr.id).toString());
    //     // console.log(localStorage.getItem('id'));
        
    //   }
    // };
    // xmlhttp.open("GET", url, true);
    // xmlhttp.send();

    
    // this.nav.push(NemesisPage);
    
  };



}

