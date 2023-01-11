import { Component } from '@angular/core';
import { F1Service } from 'src/app/services/f1.service';

@Component({
  selector: 'app-driver-standings',
  templateUrl: './driver-standings.component.html',
  styleUrls: ['./driver-standings.component.scss'],
})
export class DriverStandingsComponent {
  racePerSeason$ = this.f1Service.racePerSeasonAll$;
  paginationSelected$ = this.f1Service.paginationSelected$;
  driverStandings$ = this.f1Service.driverStandings$;
  selectedRace$ = this.f1Service.selectedRace$;

  constructor(private f1Service: F1Service) {}

  setOffset(e: number) {
    this.f1Service.setOffset(e.toString());
  }

  selectedRace(race: string) {
    this.f1Service.setRace(race);
  }
}
