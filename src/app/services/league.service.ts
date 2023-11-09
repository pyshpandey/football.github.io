import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
// Constants
import { LATEST_REAM_FIXTURES } from '../constants/constraints';
import { API_ENDPOINTS } from '../constants/api.endpoint.constraints';
// Models
import { IApiLeagueResponse, IApiLeagueTeamFixtureResponse } from '../models/IApiResponse';
import { ILeagueStandings } from '../models/ILeagueStandings';
import { ILeagueTeamFixtures } from '../models/ILeagueTeamFixtures';
// Service
import { HttpService } from '../core/http.service';

@Injectable()
export class LeagueService {

    constructor(
        private readonly httpService: HttpService
    ) { }

    getLeagueStandingList(leagueId: number): Observable<ILeagueStandings[]> {
        return this.httpService.getWithParams<IApiLeagueResponse>(API_ENDPOINTS.LEAGUE_STANDINGS, {
            league: leagueId,
            season: new Date().getFullYear()
        })
            .pipe(
                map(leagueStandRes => {
                    return leagueStandRes.response[0].league.standings[0];
                }
                )
            );
    }

    getLeagueTeamFixtures(leagueId: number, teamId: number): Observable<ILeagueTeamFixtures[]> {
        return this.httpService.getWithParams<IApiLeagueTeamFixtureResponse>(API_ENDPOINTS.LEAGUE_TEAM_FIXTURES, {
            league: leagueId,
            team: teamId,
            season: new Date().getFullYear(),
            last: LATEST_REAM_FIXTURES
        })
            .pipe(
                map(leagueTeamFixRes => {
                    return leagueTeamFixRes.response;
                }
                )
            );
    }
}
