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
    public teamComp = [
            {name: "", status: "Counter"},
            {name: "", status: "Counter"},
            {name: "", status: "Counter"},
            {name: "", status: "Counter"},
            {name: "", status: "Counter"},
            {name: "", status: "Synergy"},
            {name: "", status: "Synergy"},
            {name: "", status: "Synergy"},
            {name: "", status: "Synergy"},
            {name: "", status: "Synergy"}
        ];
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

        // var teamComps = [
        //     {name: "Blitzcrank", status: "Counter"},
        //     {name: "Cho'Gath", status: "Counter"},
        //     {name: "Vayne", status: "Counter"},
        //     {name: "Janna", status: "Counter"},
        //     {name: "Sejuani", status: "Counter"},
        //     {name: "Kalista", status: "Synergy"},
        //     {name: "Yasuo", status: "Synergy"},
        //     {name: "Alistar", status: "Synergy"},
        //     {name: "Malphite", status: "Synergy"},
        //     {name: "Alistar", status: "Synergy"}
        // ]
        // console.log("SUGGESTION:", this.createSuggestionArray(teamComps));
    }

    goToModal1() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 1});
        championModal.onDidDismiss(data => {
            setTimeout(() => {
                console.log("DATA", data);
            this.champion1 = data;
            this.teamComp[5] = {
                name: this.champion1.championName,
                status: "Synergy"
            };
            console.log("teamcomp", this.teamComp);
            console.log("return", this.createSuggestionArray(this.teamComp));
            var arr = this.createSuggestionArray(this.teamComp);
            console.log("arr", arr[0]);
            this.champion0.championName = arr[0].name;
            },300);
        });
        championModal.present();

    };

    goToModal2() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 2});
        championModal.onDidDismiss(data => {
            setTimeout(() => {
                console.log("DATA", data);
            this.champion2 = data;
            this.teamComp[6] = {
                name: this.champion2.championName,
                status: "Synergy"
            };
            console.log("teamcomp", this.teamComp);
            console.log("return", this.createSuggestionArray(this.teamComp));
            var arr = this.createSuggestionArray(this.teamComp);
            console.log("arr", arr[0]);
            this.champion0.championName = arr[0].name;
            },300);
        });
        championModal.present();
    }
    goToModal3() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 3});
        championModal.onDidDismiss(data => {
            setTimeout(() => {
                console.log("DATA", data);
            this.champion3 = data;
            this.teamComp[7] = {
                name: this.champion3.championName,
                status: "Synergy"
            };
            console.log("teamcomp", this.teamComp);
            console.log("return", this.createSuggestionArray(this.teamComp));
            var arr = this.createSuggestionArray(this.teamComp);
            console.log("arr", arr[0]);
            this.champion0.championName = arr[0].name;
            },300);
        });
        championModal.present();

    };

    goToModal4() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 4});
        championModal.onDidDismiss(data => {
            setTimeout(() => {
                console.log("DATA", data);
            this.champion4 = data;
            this.teamComp[8] = {
                name: this.champion4.championName,
                status: "Synergy"
            };
            console.log("teamcomp", this.teamComp);
            console.log("return", this.createSuggestionArray(this.teamComp));
            var arr = this.createSuggestionArray(this.teamComp);
            console.log("arr", arr[0]);
            this.champion0.championName = arr[0].name;
            },300);
        });
        championModal.present();
    }

    goToModal6() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 6});
        championModal.onDidDismiss(data => {
            setTimeout(() => {
                console.log("DATA", data);
            this.champion6 = data;
            this.teamComp[0] = {
                name: this.champion6.championName,
                status: "Counter"
            };
            console.log("teamcomp", this.teamComp);
            console.log("return", this.createSuggestionArray(this.teamComp));
            var arr = this.createSuggestionArray(this.teamComp);
            console.log("arr", arr[0]);
            this.champion0.championName = arr[0].name;
            },300);
        });
        championModal.present();
    }
    goToModal7() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 7});
        championModal.onDidDismiss(data => {
            setTimeout(() => {
                console.log("DATA", data);
            this.champion7 = data;
            this.teamComp[1] = {
                name: this.champion7.championName,
                status: "Counter"
            };
            console.log("teamcomp", this.teamComp);
            console.log("return", this.createSuggestionArray(this.teamComp));
            var arr = this.createSuggestionArray(this.teamComp);
            console.log("arr", arr[0]);
            this.champion0.championName = arr[0].name;
            },300);
        });
        championModal.present();

    };

    goToModal8() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 8});
        championModal.onDidDismiss(data => {
            setTimeout(() => {
                console.log("DATA", data);
            this.champion8 = data;
            this.teamComp[2] = {
                name: this.champion8.championName,
                status: "Counter"
            };
            console.log("teamcomp", this.teamComp);
            console.log("return", this.createSuggestionArray(this.teamComp));
            var arr = this.createSuggestionArray(this.teamComp);
            console.log("arr", arr[0]);
            this.champion0.championName = arr[0].name;
            },300);
        });
        championModal.present();
    }

    goToModal9() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 9});
        championModal.onDidDismiss(data => {
            setTimeout(() => {
                console.log("DATA", data);
            this.champion9 = data;
            this.teamComp[3] = {
                name: this.champion9.championName,
                status: "Counter"
            };
            console.log("teamcomp", this.teamComp);
            console.log("return", this.createSuggestionArray(this.teamComp));
            var arr = this.createSuggestionArray(this.teamComp);
            console.log("arr", arr[0]);
            this.champion0.championName = arr[0].name;
            },300);
        });
        championModal.present();
    }
    
    goToModal10() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 10});
        championModal.onDidDismiss(data => {
            setTimeout(() => {
            this.champion10 = data;
            this.teamComp[4] = {
                name: this.champion10.championName,
                status: "Counter"
            };
            console.log("teamcomp", this.teamComp);
            console.log("return", this.createSuggestionArray(this.teamComp));
            var arr = this.createSuggestionArray(this.teamComp);
            var name = arr[0].name;
            this.champion0.championName = name;
            console.log(this.champion0.championName);
            // var index = this.championImages[3]
            // console.log("Index", index);
            console.log(this.championImages.find(name));
        }, 1000);
        });
        championModal.present();

    }

    goToModalMid() {
        let championModal = this.modalCtrl.create(ChampionPicksPage, {'id': 0});
        championModal.onDidDismiss(data => {
            for (var i = 0; i < data.length; i++){
                if (this.champion0.championName == data[i].championName){
                    this.champion0.imageUrl = data[i].imageUrl;
                }
            }
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
    // if combineMethod == "Union", types are necessary
    // if combineMethod == "Intersect", a1 = optionsArray, a2 = infoArray, types are unnecessary
    // Allowed values for types: Counter, Synergy, Option
    combineArrays(a1, a1Type, a2, a2Type, combineMethod){
        let combinedArray = [];
        if (combineMethod == "Union"){
            var added = [];
            for (var champion in a2){   // synergyArray
                //First make a champ with the complement's data and throw it in combinedArray
                var Champion;
                if (a2Type == "Counter"){
                    Champion = {
                        name: a2[champion].counter,
                        score: parseInt(a2[champion].percent)
                    }
                } else if (a2Type == "Synergy"){
                    Champion = {
                        name: a2[champion].complement,
                        score: parseInt(a2[champion].percent)
                    }
                } else if (a2Type == "Option"){
                    Champion = {
                        name: a2[champion].name,
                        score: parseInt(a2[champion].score)
                    }
                } else {
                    console.log("Invalid type for combineArrays(a2Type).  Allowed values are Counter, Synergy, or Option.");
                }
                combinedArray.push(Champion);

                //Check for duplicates
                if (a1Type == "Counter"){
                    for (var master in a1){
                        if (a1[master].counter == combinedArray[champion].name){ // If we find a match, update the info and add the the array
                            combinedArray[champion].score += parseInt(a1[master].percent);
                        }
                    }
                } else if (a1Type == "Synergy"){
                    for (var master in a1){
                        if (a1[master].complement == combinedArray[champion].name){ // If we find a match, update the info and add the the array
                            combinedArray[champion].score += parseInt(a1[master].percent);
                        }
                    }
                } else if (a1Type == "Option"){
                    for (var master in a1){
                        if (a1[master].name == combinedArray[champion].name){ // If we find a match, update the info and add the the array
                            combinedArray[champion].score += a1[master].score;
                        }
                    }
                } else {
                    console.log("Invalid type for combineArrays(a1Type).  Allowed values are Counter, Synergy, or Option.");
                }
            }

            // Put in remaining data from a1
            for (var champion in a1){
                var needToAdd = true;
                var ChampionToAdd;
                if (a1Type == "Counter"){
                    for (var master in combinedArray){
                        if (combinedArray[master].name == a1[champion].counter){
                            needToAdd = false;
                        }
                    }
                    if (needToAdd){
                        ChampionToAdd = {
                        name: a1[champion].counter,
                        score: parseInt(a1[champion].percent)
                        }
                        combinedArray.push(ChampionToAdd);
                    }
                } else if (a1Type == "Synergy"){
                    for (var master in combinedArray){
                        if (combinedArray[master].name == a1[champion].complement){
                            needToAdd = false;
                        }
                    }
                    if (needToAdd){
                        ChampionToAdd = {
                        name: a1[champion].complement,
                        score: parseInt(a1[champion].percent)
                        }
                        combinedArray.push(ChampionToAdd);
                    }
                } else if (a1Type == "Option"){
                    for (var master in combinedArray){
                        if (combinedArray[master].name == a1[champion].name){
                            needToAdd = false;
                        }
                    }
                    if (needToAdd){
                        ChampionToAdd = {
                        name: a1[champion].name,
                        score: parseInt(a1[champion].score)
                        }
                        combinedArray.push(ChampionToAdd);
                    }
                } else {
                    console.log("Invalid type for combineArrays(a1Type).  Allowed values are Counter, Synergy, or Option.");
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

    createSuggestionArray(champions){
        // First thing's first, delete the empty positions
        for(var index = 0; index < champions.length; ++index){
            if (champions[index].name == ""){
                champions.splice(index--, 1);
            }
        }

        // Load up the array of arrays.  These hold counter and synergy information
        var arrays: any = []; 
        for (var champion in champions){
            if (champions[champion].status == "Counter"){
                arrays.push(this.getChampionArray(champions[champion].name, this.counterInfo, "Counter"));
            }
            if (champions[champion].status == "Synergy"){
                arrays.push(this.getChampionArray(champions[champion].name, this.synergyInfo, "Synergy"));
            }
        }

        // Create the master optionsArray 
        var optionsArray = [];

        if (arrays.length == 1){ // Fix if one thing in array
            if (champions[0].status == "Counter"){ 
                for (let elem in arrays[0].counters){
                    var obj = {
                        name: arrays[0].counters[elem].counter, 
                        score: arrays[0].counters[elem].percent
                    }
                    optionsArray.push(obj);
                }
            } else if (champions[0].status == "Synergy"){
                for (let elem in arrays[0].counters){
                    var obj = {
                        name: arrays[0].counters[elem].complement, 
                        score: arrays[0].counters[elem].percent
                    }
                    optionsArray.push(obj);
                }
            } 
        } else {
            optionsArray = arrays[0];
        }


        if (arrays.length > 1){
            for (var i = 1; i < arrays.length; ++i){
                if (i == 1){
                    if (champions[0].status == "Counter" && champions[1].status == "Counter"){
                        optionsArray = this.combineArrays(arrays[0].counters, champions[0].status, arrays[i].counters, champions[i].status, "Union");
                    } else if (champions[0].status == "Counter" && champions[i].status == "Synergy"){
                        optionsArray = this.combineArrays(arrays[0].counters, champions[0].status, arrays[i].complements, champions[i].status, "Union");
                    } else if (champions[0].status == "Synergy" && champions[i].status == "Counter"){
                        optionsArray = this.combineArrays(arrays[0].complemments, champions[0].status, arrays[i].counters, champions[i].status, "Union");
                    } else if (champions[0].status == "Synergy" && champions[i].status == "Synergy"){
                        optionsArray = this.combineArrays(arrays[0].complements, champions[0].status, arrays[i].complements, champions[i].status, "Union");
                    }
                } else {
                    if (champions[i].status == "Counter"){
                        optionsArray = this.combineArrays(arrays[i].counters, champions[i].status, optionsArray, "Option", "Union");
                    } else if (champions[i].status == "Synergy"){
                        optionsArray = this.combineArrays(arrays[i].complements, champions[i].status, optionsArray, "Option", "Union");
                    }
                }
            }
        }

        // Create the master suggestionArray
        var suggestionsArray = this.combineArrays(optionsArray, "Option", this.userInfo, "Info", "Intersect");
        
        // Delete champions already in game
        for (var idex = 0; idex < suggestionsArray.length; ++idex){
            for (var jdex in champions){
                if (suggestionsArray[idex].name == champions[jdex].name){
                    suggestionsArray.splice(idex--, 1);
                }
            }
        }

        // Personalized information
        for (var champion in suggestionsArray){
            var winrate = suggestionsArray[champion].stats.totalSessionsWon / suggestionsArray[champion].stats.totalSessionsPlayed;
            suggestionsArray[champion].score += Math.pow(suggestionsArray[champion].stats.totalSessionsPlayed, 1);
            suggestionsArray[champion].score *= winrate;
        }


        // Sort
        suggestionsArray.sort(function compareScores(a, b){
            if (a.score > b.score){
                return -1;
            }
            if (a.score < b.score){
                return 1;
            }
            return 0;
        })

        return suggestionsArray;
    }
}

