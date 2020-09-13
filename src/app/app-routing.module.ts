import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidHomeComponent} from "./components/covid-home/covid-home.component";
import { CovidIndiaComponent} from "./components//covid-india/covid-india.component";
import { CovidWorldComponent} from "./components/covid-world/covid-world.component";
const routes: Routes = [
  {path : "",  component : CovidHomeComponent},
  {path : "home",  component : CovidHomeComponent},
  {path : "india",  component : CovidIndiaComponent},
  {path : "world",  component : CovidWorldComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
