import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
// Models
import { ILeagueTeamFixtures } from 'src/app/models/ILeagueTeamFixtures';
// Service
import { LeagueService } from 'src/app/services/league.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-league-team-fixtures',
  templateUrl: './league-team-fixtures.component.html',
  styleUrls: ['./league-team-fixtures.component.css']
})
export class LeagueTeamFixturesComponent implements OnInit, OnDestroy {
  leagueId!: number;
  teamId!: number;
  isLoading!: boolean;
  leagueTeamFixturesData: ILeagueTeamFixtures[] = [];
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
      this.teamId = params['teamId'];
      this.getLeagueTeamFixtures();
    });
  }

  getLeagueTeamFixtures(): void {
    this.isLoading = true;
    const leagueTeamFixtures = this.storageService.getLocalData(`leagueTeamFixtures-${this.leagueId}-${this.teamId}`);
    if (leagueTeamFixtures !== null) {
      this.leagueTeamFixturesData = JSON.parse(leagueTeamFixtures);
      this.isLoading = false;
    } else {
      this.leagueService.getLeagueTeamFixtures(this.leagueId, this.teamId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((leagueTeamFixRes) => {
       this.leagueTeamFixturesData = leagueTeamFixRes;
        this.storageService.setLocalData(`leagueTeamFixtures-${this.leagueId}-${this.teamId}`, leagueTeamFixRes);
        this.isLoading = false;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['league-standings', this.leagueId]);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
