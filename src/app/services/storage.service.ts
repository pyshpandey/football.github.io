import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    constructor() { }

    getLocalData(keyName: string) {
        return localStorage.getItem(keyName);
    }

    setLocalData(keyName: string, data: object) {
        return localStorage.setItem(keyName, JSON.stringify(data));
    }
}
