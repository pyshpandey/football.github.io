import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
// Models
import { ILeagueStandings } from 'src/app/models/ILeagueStandings';
// Service
import { StorageService } from 'src/app/services/storage.service';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'app-league-standings',
  templateUrl: './league-standings.component.html',
  styleUrls: ['./league-standings.component.css']
})
export class LeagueStandingsComponent implements OnInit, OnDestroy {
  leagueId!: number;
  isLoading!: boolean;
  countryLeagueStandings: ILeagueStandings[] = [];
  readonly unsubscribe$: Subject<void> = new Subject();

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly storageService: StorageService,
    private readonly leagueService: LeagueService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.leagueId = params['leagueId'];
      this.getLeagueStandingList();
    });
  }

  getLeagueStandingList(): void {
    this.isLoading = true;
    const leagueStandingData = this.storageService.getLocalData(`leagueStandings-${this.leagueId}`);
    if (leagueStandingData !== null) {
      this.countryLeagueStandings = JSON.parse(leagueStandingData);
      this.isLoading = false;
    } else {
      this.leagueService.getLeagueStandingList(this.leagueId)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((leagueStandRes) => {
          this.countryLeagueStandings = leagueStandRes;
          this.storageService.setLocalData(`leagueStandings-${this.leagueId}`, leagueStandRes);
          this.isLoading = false;
        });
    }

  }

  navigateToTeamFixtues(teamId: number): void {
    this.router.navigate(['league-team-fixtures', this.leagueId, teamId]);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

