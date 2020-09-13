import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-covid-india-card',
  templateUrl: './covid-india-card.component.html',
  styleUrls: ['./covid-india-card.component.css']
})
export class CovidIndiaCardComponent implements OnInit {

  @Input() selectedState:any;

  constructor() { }

  ngOnInit(): void {
  }

}
