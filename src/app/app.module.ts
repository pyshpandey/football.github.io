import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Components
import { LeagueStandingsComponent } from './components/league-standings/league-standings.component';
import { LeagueCountryComponent } from './components/league-country/league-country.component';
// Service
import { StorageService } from './services/storage.service';
import { LeagueService } from './services/league.service';
import { LeagueTeamFixturesComponent } from './components/league-team-fixtures/league-team-fixtures.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueStandingsComponent,
    LeagueCountryComponent,
    LeagueTeamFixturesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StorageService, LeagueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
