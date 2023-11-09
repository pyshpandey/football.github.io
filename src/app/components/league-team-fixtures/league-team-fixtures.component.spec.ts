import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTeamFixturesComponent } from './league-team-fixtures.component';

describe('LeagueTeamStandingsComponent', () => {
  let component: LeagueTeamFixturesComponent;
  let fixture: ComponentFixture<LeagueTeamFixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueTeamFixturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueTeamFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
