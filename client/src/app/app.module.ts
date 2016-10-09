import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { IntroPage } from '../pages/intro-page/intro-page';
import { NemesisPage } from '../pages/nemesis/nemesis';
import { ChampionPicksPage } from '../pages/champion-pick/champion-pick'  


@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    NemesisPage,
    ChampionPicksPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    NemesisPage,
    ChampionPicksPage
  ],
  providers: []
})
export class AppModule {}
