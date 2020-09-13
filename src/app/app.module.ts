import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CoronaService} from './services/corona.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidIndiaComponent } from './components/covid-india/covid-india.component';
import { CovidWorldComponent } from './components/covid-world/covid-world.component';
import { CovidHomeComponent } from './components/covid-home/covid-home.component';



import { CovidIndiaListComponent } from './components/covid-india-list/covid-india-list.component';
import { CovidIndiaCardComponent } from './components/covid-india-card/covid-india-card.component';
import { CovidWorldListComponent } from './components/covid-world-list/covid-world-list.component';
import { CovidWorldCardComponent } from './components/covid-world-card/covid-world-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidIndiaComponent,
    CovidWorldComponent,
    CovidHomeComponent,
    CovidIndiaListComponent,
    CovidIndiaCardComponent,
    CovidWorldListComponent,
    CovidWorldCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [CoronaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
