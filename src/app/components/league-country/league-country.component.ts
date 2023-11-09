import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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

  constructor(
    private readonly router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  ngOnDestroy(): void {
  }

}
