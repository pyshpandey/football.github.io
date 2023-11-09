import { Component, OnDestroy, OnInit } from '@angular/core';
// Constants
import { LEAGUE_COUNTRY_LIST } from '../../constants/constraints';

@Component({
  selector: 'app-league-country',
  templateUrl: './league-country.component.html',
  styleUrls: ['./league-country.component.css']
})
export class LeagueCountryComponent implements OnInit, OnDestroy {
  leagueCountryList = LEAGUE_COUNTRY_LIST;
  selectedTab: string = '';

  constructor() {}

  ngOnInit(): void {
    localStorage.clear();
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  ngOnDestroy(): void {
  }

}
