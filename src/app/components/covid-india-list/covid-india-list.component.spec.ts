import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidIndiaListComponent } from './covid-india-list.component';

describe('CovidIndiaListComponent', () => {
  let component: CovidIndiaListComponent;
  let fixture: ComponentFixture<CovidIndiaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidIndiaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidIndiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
