import { Component } from '@angular/core';
import { F1Service } from '../../services/f1.service';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss'],
})
export class BonusComponent {
  seasonResults$ = this.f1Service.allSeasonResults$;

  constructor(private f1Service: F1Service) {}
}
