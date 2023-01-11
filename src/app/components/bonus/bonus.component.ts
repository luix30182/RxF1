import { Component } from '@angular/core';
import { F1Service } from '../../services/f1.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss'],
})
export class BonusComponent {
  seasonResults$ = this.f1Service.allSeasonResults$.pipe(
    map((r: Array<any>) => {
      const racet: Array<any> = [];
      r.forEach((t) => racet.push(t.MRData.RaceTable.Races[0]));
      return racet;
    })
  );

  constructor(private f1Service: F1Service) {
    this.f1Service.setYear('2011');
  }

  getFilteredCars(results: Array<any>, status: string) {
    return results.filter((r) => r.status === status);
  }

  getTotalsFilter(results: Array<any>, status: string) {
    return results
      .map((r) => r.Results.filter((res: any) => res.status === status))
      .reduce((acc, crr) => acc + crr.length, 0);
  }
}
