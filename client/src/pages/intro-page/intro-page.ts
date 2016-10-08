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
  public userArr: any[] = [];
  public id: any;
  public stats: any[] = [];
  public namedStats: any[];
  public champions: any[];
  constructor(public nav: NavController, public http: Http) {
  }

  pushNemesisPage(name) {

    this.http.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + name + "?api_key=RGAPI-ce8f3488-0df4-4d9c-b42b-9c64b391b722").subscribe(data => {
      let str = data.text();
      let splitVal = str.search(":");
      var myArr = JSON.parse(str.slice(splitVal + 1, -1));
      localStorage.setItem('id', (myArr.id).toString());
    });

    this.http.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?dataById=true&api_key=RGAPI-ce8f3488-0df4-4d9c-b42b-9c64b391b722").map(res => res.json()).subscribe(data => {
      let arr = data.data;
      this.champions = Object.keys(arr).map(function(key) {return arr[key];});
    });

    this.http.get("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + localStorage.getItem('id') + "/ranked?season=SEASON2016&api_key=RGAPI-ce8f3488-0df4-4d9c-b42b-9c64b391b722").map(res => res.json()).subscribe(data => {
      this.stats = data;
      console.log(this.stats, this.champions);
      for (var i=0; i < this.stats.champions.length; i++){
        for (var j = 0; j < this.champions.length; j++){
                  if(this.stats.champions[i].id == this.champions[j].id ){
                    this.stats.champions[i].id = this.champions[j].name;
                    console.log(this.stats.champions[i].id);
                  }
        }
      }
      console.log(this.stats);
      this.nav.push(NemesisPage, { 'userInfo': this.stats })
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

