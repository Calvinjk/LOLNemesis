import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NemesisPage } from '../nemesis/nemesis';

@Component({
  templateUrl: 'intro-page.html'
})
export class IntroPage {
  public summoner = {
    name: ""
  }
  public userArr: any;
  constructor(public nav: NavController) {
  }
  
  pushNemesisPage(name) {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + this.summoner.name + "?api_key=RGAPI-ce8f3488-0df4-4d9c-b42b-9c64b391b722";

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let splitVal = this.responseText.search(":");
        var myArr = JSON.parse(this.responseText.slice(splitVal + 1, -1));
        console.log(myArr.id);
        // this.summoner.id = myArr.id;
        var xmlhttp1 = new XMLHttpRequest();
        var url1 = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + myArr.id + "/ranked?season=SEASON2016&api_key=RGAPI-ce8f3488-0df4-4d9c-b42b-9c64b391b722";

        xmlhttp1.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            console.log(myArr);
            this.userArr = myArr;
          }
        };
        xmlhttp1.open("GET", url1, true);
        xmlhttp1.send();

      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    setTimeout(() => {
      this.nav.push(NemesisPage, this.userArr);
    }, 500);

  };



}

