import { Component, OnInit } from '@angular/core';

import {CoronaService} from '../../services/corona.service';

@Component({
  selector: 'app-covid-india',
  templateUrl: './covid-india.component.html',
  styleUrls: ['./covid-india.component.css']
})
export class CovidIndiaComponent implements OnInit {

  // public covidIndiaData:any;
  public selectedState:any;

  // constructor() {
  //   let contactStore = new ContactStore();
  //   this.contacts = contactStore.fetchContacts();
  // }

  public covidIndia: any;
  public errorMessage: string;

  constructor(private coronaService: CoronaService) { }

  ngOnInit(): void {
    this.coronaService.getCovidIndia().subscribe((data) => {
      this.covidIndia = data;
    } , (err) => {
      this.errorMessage = err;
    });
  }

}
