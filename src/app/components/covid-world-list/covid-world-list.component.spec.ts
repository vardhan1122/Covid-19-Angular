import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidWorldListComponent } from './covid-world-list.component';

describe('CovidWorldListComponent', () => {
  let component: CovidWorldListComponent;
  let fixture: ComponentFixture<CovidWorldListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidWorldListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidWorldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
