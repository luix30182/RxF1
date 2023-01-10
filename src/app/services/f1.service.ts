import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, switchMap, concatMap } from 'rxjs';
import {
  DriversResponse,
  RaceResponse,
  ResultsResponse,
} from 'src/interfaces/f1';

@Injectable({
  providedIn: 'root',
})
export class F1Service {
  private baseURL = 'http://ergast.com/api/f1';
  private selectedYearSubject = new BehaviorSubject<string>('2018');
  private selectedYear = this.selectedYearSubject.asObservable();

  constructor(private http: HttpClient) {}

  setYear(year: string) {
    this.selectedYearSubject.next(year);
  }

  driversPerSeason$: Observable<DriversResponse> = this.selectedYear.pipe(
    switchMap((year) => {
      return this.http.get<DriversResponse>(
        `${this.baseURL}/${year}/drivers.json?limit=10`
      );
    })
  );

  racePerSeason$: Observable<RaceResponse> = this.selectedYear.pipe(
    switchMap((year) => {
      return this.http.get<RaceResponse>(
        `${this.baseURL}/${year}.json?limit=10`
      );
    })
  );
}
