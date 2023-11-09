export interface ILeagueStandings {
    rank: number;
    goalsDiff: number;
    points: number;
    team: {
        id: number;
        name: string;
        logo: string;
    };
    all: {
        played: number;
        win: number;
        lose: number;
        draw: number;
    };
}
