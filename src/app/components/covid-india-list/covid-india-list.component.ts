import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import {CoronaService} from '../../services/corona.service';

@Component({
  selector: 'app-covid-india-list',
  templateUrl: './covid-india-list.component.html',
  styleUrls: ['./covid-india-list.component.css']
})
export class CovidIndiaListComponent implements OnInit {

  @Input() covidIndiaData:any;
  @Output() sendData = new EventEmitter();


  // when we click on each row
  public clickContact(covidInd){
    this.sendData.emit(covidInd); //send data to the parent
  }

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
