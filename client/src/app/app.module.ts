import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { IntroPage } from '../pages/intro-page/intro-page';


@NgModule({
  declarations: [
    MyApp,
    IntroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage
  ],
  providers: []
})
export class AppModule {}
