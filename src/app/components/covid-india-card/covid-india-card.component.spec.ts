import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidIndiaCardComponent } from './covid-india-card.component';

describe('CovidIndiaCardComponent', () => {
  let component: CovidIndiaCardComponent;
  let fixture: ComponentFixture<CovidIndiaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidIndiaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidIndiaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
