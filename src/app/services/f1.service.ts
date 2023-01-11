import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultsResponse } from '../../interfaces/f1';
import { map } from 'rxjs';
import {
  Observable,
  BehaviorSubject,
  switchMap,
  combineLatest,
  filter,
} from 'rxjs';
import {
  DriversResponse,
  DriverStandingsResult,
  QualifyingResults,
  RaceResponse,
} from 'src/interfaces/f1';

@Injectable({
  providedIn: 'root',
})
export class F1Service {
  private baseURL = 'https://ergast.com/api/f1';

  //Drivers
  private selectedYearSubject = new BehaviorSubject<string>('2018');
  selectedYear$ = this.selectedYearSubject.asObservable();

  private paginationSubject = new BehaviorSubject<string>('10');
  paginationSelected$ = this.paginationSubject.asObservable();

  private offsetSubject = new BehaviorSubject<string>('0');
  ofsset$ = this.offsetSubject.asObservable();

  private selectedRaceSubject = new BehaviorSubject<string>('1');
  selectedRace$ = this.selectedRaceSubject.asObservable();

  constructor(private http: HttpClient) {}

  setYear(year: string) {
    this.selectedYearSubject.next(year);
  }

  setPagination(n: string) {
    this.paginationSubject.next(n);
  }

  setRace(race: string) {
    this.selectedRaceSubject.next(race);
  }

  setOffset(n: string) {
    this.offsetSubject.next(n);
  }

  yearPaginationRace$ = combineLatest([
    this.selectedYear$,
    this.paginationSelected$,
    this.ofsset$,
    this.selectedRace$,
  ]);

  driversPerSeason$: Observable<DriversResponse> =
    this.yearPaginationRace$.pipe(
      switchMap(([year, pagination, offset, race]) => {
        return this.http.get<DriversResponse>(
          `${this.baseURL}/${year}/drivers.json?limit=${pagination}&offset=${offset}`
        );
      })
    );

  racePerSeason$ = this.yearPaginationRace$.pipe(
    switchMap(([year, pagination, offset]) =>
      this.http.get<RaceResponse>(
        `${this.baseURL}/${year}.json?limit=${pagination}&offset=${offset}`
      )
    )
  );

  raseWithResult$ = this.racePerSeason$.pipe(
    switchMap((res) => {
      res.MRData.RaceTable.Races.forEach(
        (race) =>
          (race.finalResult = this.http
            .get<ResultsResponse>(
              `${this.baseURL}/${race.season}/${race.round}/results.json`
            )
            .pipe(
              map((result) =>
                result.MRData.RaceTable.Races[0].Results?.filter(
                  (r) => r.position === '1'
                )
              )
            ))
      );

      return [res];
    })
  );

  racePerSeasonAll$ = this.yearPaginationRace$.pipe(
    switchMap(([year]) =>
      this.http.get<RaceResponse>(`${this.baseURL}/${year}.json`)
    )
  );

  raceQualifyingResults$ = this.yearPaginationRace$.pipe(
    filter(([year, pagination, race]) => Boolean(race)),
    switchMap(([year, pagination, offset, race]) => {
      return this.http.get<QualifyingResults>(
        `${this.baseURL}/${year}/${race}/qualifying.json?limit=${pagination}&offset=${offset}`
      );
    })
  );

  driverStandings$ = this.yearPaginationRace$.pipe(
    filter(([year, pagination, race]) => Boolean(race)),
    switchMap(([year, pagination, offset, race]) => {
      return this.http.get<DriverStandingsResult>(
        `${this.baseURL}/${year}/${race}/driverStandings.json?limit=${pagination}&offset=${offset}`
      );
    })
  );
}
