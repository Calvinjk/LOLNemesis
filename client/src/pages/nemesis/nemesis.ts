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
    public champion0: any;
    public champion1: any;
    public champion2: any;
    public champion3: any;
    public champion4: any;
    public champion5: any;
    public champion6: any;
    public champion7: any;
    public champion8: any;
    public champion9: any;
    public champion10: any;
    constructor(public nav: NavController,
        public params: NavParams,
        public http: Http,
        public modalCtrl: ModalController) {
            this.champion0 = {
                imageUrl: "/images.jpg",
                championName: ""
            };
            this.champion1 = {
                imageUrl: "/images.jpg",
                championName: ""
            };
            this.champion2 = {
                imageUrl: "/images.jpg",
                championName: ""
            };
            this.champion3 = {
                imageUrl: "/images.jpg",
                championName: ""
            };
            this.champion4 = {
                imageUrl: "/images.jpg",
                championName: ""
            };
            this.champion6 = {
                imageUrl: "/images.jpg",
                championName: ""
            };
            this.champion7 = {
                imageUrl: "/images.jpg",
                championName: ""
            };
            this.champion8 = {
                imageUrl: "/images.jpg",
                championName: ""
            };
            this.champion9 = {
                imageUrl: "/images.jpg",
                championName: ""
            };
            this.champion0 = {
                imageUrl: "/images.jpg",
                championName: ""
            };
            this.champion10 = {
                imageUrl: "/images.jpg",
                championName: ""
            };


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

        //Dynamically get opposing champions
        let opposingChamp1 = "Rammus";
        
        var zedCounters = this.getChampionArray("Zed", this.counterInfo, "Counter");
        var alistarSynergies = this.getChampionArray("Alistar", this.synergyInfo, "Synergy");
        console.log("counter", zedCounters.counters, "synergy", alistarSynergies.complements);
        console.log("userInfo", this.userInfo);

        var optionsArray = this.combineArrays(zedCounters.counters, alistarSynergies.complements, "Union");
        console.log("optionsArray", optionsArray);

        var suggestionsArray = this.combineArrays(optionsArray, this.userInfo, "Intersect");
        console.log("suggestionsArray", suggestionsArray);
    }

    goToModal1() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 1});
        championModal.onDidDismiss(data => {
            this.champion1 = data;
        });
        championModal.present();

    };

    goToModal2() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 2});
        championModal.onDidDismiss(data => {
            this.champion2 = data;
        });
        championModal.present();
    }
    goToModal3() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 3});
        championModal.onDidDismiss(data => {
            this.champion3 = data;
        });
        championModal.present();

    };

    goToModal4() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 4});
        championModal.onDidDismiss(data => {
            this.champion4 = data;
        });
        championModal.present();
    }

    goToModal6() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 6});
        championModal.onDidDismiss(data => {
            this.champion6 = data;
        });
        championModal.present();
    }
    goToModal7() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 7});
        championModal.onDidDismiss(data => {
            this.champion7 = data;
        });
        championModal.present();

    };

    goToModal8() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 8});
        championModal.onDidDismiss(data => {
            this.champion8 = data;;
        });
        championModal.present();
    }

    goToModal9() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 9});
        championModal.onDidDismiss(data => {
            this.champion9 = data;
        });
        championModal.present();
    }
    
    goToModal10() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 10});
        championModal.onDidDismiss(data => {
            this.champion10 = data;
        });
        championModal.present();
    }

    goToModalMid() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 0});
        championModal.onDidDismiss(data => {
            this.champion0 = data;
        });
        championModal.present();
    }

    getChampionArray(championName, largeArray, type){
        if (type == "Synergy"){
            let i = 0;
            while (this.synergyInfo[i].name != championName){
                ++i;
            }
            return this.synergyInfo[i];
        } else if (type == "Counter"){
            let i = 0;
            while (this.counterInfo[i].name != championName){
                ++i;
            }
            return this.counterInfo[i];
        } else {
            console.log("Invalid type for getChampionArray(type).  Valid types are Counter or Synergy");
        }
    }

    // NECESSARY TO USE THIS FUNCTION:
    // if combineMethod == "Union", a1 = counterArray, a2 = synergyArray
    // if combineMethod == "Intersect", a1 = optionsArray, a2 = infoArray
    combineArrays(a1, a2, combineMethod){
        let combinedArray = [];
        if (combineMethod == "Union"){
            var added = [];
            for (var champion in a2){   // synergyArray
                //First make a champ with the complement's data and throw it in combinedArray
                var Champion = {
                    name: a2[champion].complement,
                    score: parseInt(a2[champion].percent)
                }
                combinedArray.push(Champion);

                for (var master in a1){
                    if (a1[master].counter == combinedArray[champion].name){ // If we find a match, update the info and add the the array
                        combinedArray[champion].score += parseInt(a1[master].percent);
                    }
                }
            }

            // Put in remaining data from a1
            for (var champion in a1){
                var needToAdd = true;
                for (var master in combinedArray){
                    if (combinedArray[master].name == a1[champion].counter){
                        needToAdd = false;
                    }
                }
                if (needToAdd){
                    var Champion = {
                    name: a1[champion].counter,
                    score: parseInt(a1[champion].percent)
                }
                combinedArray.push(Champion);
                }
                needToAdd = true;
            }

            return combinedArray;
        } else if (combineMethod == "Intersect"){
                for (var champion in a1){
                    var Suggestion = a1[champion];
                    for (var index in a2){
                        if (a2[index].id == Suggestion.name){
                            Suggestion.stats = a2[index].stats;
                            combinedArray.push(Suggestion);
                        }
                    }
                }
                return combinedArray;
        } else {
            console.log("Invalid type for combineArrays(combineMethod).  Valid methods are Union or Intersect");
        }
    }


}

