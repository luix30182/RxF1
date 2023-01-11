import { Component } from '@angular/core';
import { F1Service } from '../../services/f1.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent {
  paginationSelected$ = this.f1Service.paginationSelected$;
  driversPerSeason$ = this.f1Service.driversPerSeason$;

  constructor(private f1Service: F1Service) {}

  setOffset(e: number) {
    this.f1Service.setOffset(e.toString());
  }
}
