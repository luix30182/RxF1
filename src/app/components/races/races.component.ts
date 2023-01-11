import { Component } from '@angular/core';
import { F1Service } from 'src/app/services/f1.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss'],
})
export class RacesComponent {
  racePerSeason$ = this.f1Service.raseWithResult$;
  paginationSelected$ = this.f1Service.paginationSelected$;

  constructor(private f1Service: F1Service) {}

  setOffset(e: number) {
    this.f1Service.setOffset(e.toString());
  }
}
