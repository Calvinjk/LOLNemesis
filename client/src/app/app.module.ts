import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { IntroPage } from '../pages/intro-page/intro-page';
import { NemesisPage } from '../pages/nemesis/nemesis';


@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    NemesisPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    NemesisPage
  ],
  providers: []
})
export class AppModule {}
