import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LeagueCountryComponent } from './components/league-country/league-country.component';
import { LeagueStandingsComponent } from './components/league-standings/league-standings.component';
import { LeagueTeamFixturesComponent } from './components/league-team-fixtures/league-team-fixtures.component';

const routes: Routes = [
  {
    path: '', component: LeagueCountryComponent,
    children: [
      { path: 'league-standings/:leagueId', component: LeagueStandingsComponent },
    ]
  },
  { path: 'league-team-fixtures/:leagueId/:teamId', component: LeagueTeamFixturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
