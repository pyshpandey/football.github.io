import { ILeagueStandings } from './ILeagueStandings';
import { ILeagueTeamFixtures } from './ILeagueTeamFixtures';

export interface IApiLeagueResponse {
    get: string;
    errors: [];
    paging: IPaging;
    response: [{
        league: {
            standings: [[ILeagueStandings]]
        }
    }];
}

export interface IApiLeagueTeamFixtureResponse {
    get: string;
    errors: [];
    paging: IPaging;
    response: [ILeagueTeamFixtures];
}

export interface IPaging {
    current: number;
    total: number;
}
