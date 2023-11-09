import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueCountryComponent } from './league-country.component';

describe('LeagueCountryComponent', () => {
  let component: LeagueCountryComponent;
  let fixture: ComponentFixture<LeagueCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
