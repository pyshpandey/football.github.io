import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Environments
import { environment } from '../../environments/environment';

const headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': environment.footballLeagueApiKey
})


@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(
        readonly httpClient: HttpClient
    ) { }

    public getWithParams<T>(endPoint: string, params: Params) {
        return this.httpClient.get<T>(endPoint, { headers, params });
    }

}
