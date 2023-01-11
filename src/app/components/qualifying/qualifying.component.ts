import { Component } from '@angular/core';
import { F1Service } from 'src/app/services/f1.service';

@Component({
  selector: 'app-qualifying',
  templateUrl: './qualifying.component.html',
  styleUrls: ['./qualifying.component.scss'],
})
export class QualifyingComponent {
  racePerSeason$ = this.f1Service.racePerSeasonAll$;
  paginationSelected$ = this.f1Service.paginationSelected$;
  qualifyingResult$ = this.f1Service.raceQualifyingResults$;

  constructor(private f1Service: F1Service) {}

  setOffset(e: number) {
    this.f1Service.setOffset(e.toString());
  }

  selectedRace(race: string) {
    this.f1Service.setRace(race);
  }
}
