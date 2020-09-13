import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidWorldCardComponent } from './covid-world-card.component';

describe('CovidWorldCardComponent', () => {
  let component: CovidWorldCardComponent;
  let fixture: ComponentFixture<CovidWorldCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidWorldCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidWorldCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
