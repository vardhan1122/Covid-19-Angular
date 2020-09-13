import { Component, OnInit } from '@angular/core';

import {CoronaService} from '../../services/corona.service';

@Component({
  selector: 'app-covid-world',
  templateUrl: './covid-world.component.html',
  styleUrls: ['./covid-world.component.css']
})
export class CovidWorldComponent implements OnInit {

  public covidWorld: any;
  public errorMessage: string;
  public covidWorldTotal: any;

  constructor(private coronaService: CoronaService) { }

  ngOnInit(): void {
    this.coronaService.getCovidWorld().subscribe((data) => {
      this.covidWorld = data;
    } , (err) => {
      this.errorMessage = err;
    });

    this.coronaService.getCovidWorldTotal().subscribe((data) => {
      this.covidWorldTotal = data;
    } , (err) => {
      this.errorMessage = err;
    });

  }



}
