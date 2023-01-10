import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { F1Service } from 'src/app/services/f1.service';
import { ResultsResponse } from 'src/interfaces/f1';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss'],
})
export class RacesComponent {
  constructor(private f1Service: F1Service) {}

  racePerSeason$ = this.f1Service.racePerSeason$.pipe(
    map((data) => data.MRData.RaceTable.Races)
  );
}
