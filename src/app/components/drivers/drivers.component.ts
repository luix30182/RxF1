import { Component } from '@angular/core';
import { map } from 'rxjs';
import { F1Service } from '../../services/f1.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent {
  constructor(private f1Service: F1Service) {}

  driversPerSeason$ = this.f1Service.driversPerSeason$.pipe(
    map((data) => data.MRData.DriverTable.Drivers)
  );
}
