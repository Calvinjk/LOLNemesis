import { Component } from '@angular/core';


@Component({
  templateUrl: 'intro-page.html'
})
export class IntroPage {
  public summoner = {
    name: "",
    champions: []
  }
  constructor() {
  }

  pushNemesisPage(name){
    console.log("Name: ", this.summoner.name);
    console.log("Champions: ", this.summoner.champions);
    
  }
}
