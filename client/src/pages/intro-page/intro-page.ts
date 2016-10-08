import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NemesisPage } from '../nemesis/nemesis';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'intro-page.html'
})
export class IntroPage implements OnInit {
  public summoner = {
    name: ""
  }
  public userArr: any[] = [];
  public id: any;
  public stats: any = {};
  public namedStats: any[];
  public champions: any = {};
  public counterInfo: any = {};
  public synergyInfo: any ={};
  constructor(public nav: NavController, public http: Http) {

  }


  ngOnInit() {

    //gets list of counters with names and percentages
    this.http.get("/championCounterInfo.json").subscribe(data => {
      let arr = JSON.parse(data.text());
      for (let i = 0; i < arr.length; i++){
        this.counterInfo[i] = {
          name: arr[i].mainChampion,
          counters: {}
        }

        for (let j = 1; j < arr[i].counterChampions.length; j++){
          this.counterInfo[i].counters[j-1] = {
            counter: arr[i].counterChampions[j],
            percent: arr[i].percent[j-1]
          }
            
          
        }
      }
      console.log(this.counterInfo);
    });

    //gets list of champions that complement champ with names and percentages
    this.http.get("/championSynergyInfo.json").subscribe(data => {
      let arr = JSON.parse(data.text());
      for (let i = 0; i < arr.length; i++){
        this.synergyInfo[i] = {
          name: arr[i].mainChampion,
          complements: {}
        }

        for (let j = 1; j < arr[i].counterChampions.length; j++){
          this.synergyInfo[i].complements[j-1] = {
            complement: arr[i].counterChampions[j],
            percent: arr[i].percent[j-1]
          }
            
          
        }
      }
      console.log(this.synergyInfo);
    });



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

  };



}

