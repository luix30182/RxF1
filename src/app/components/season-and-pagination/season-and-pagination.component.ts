import { Component, EventEmitter, Input, Output } from '@angular/core';
import { F1Service } from 'src/app/services/f1.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-season-and-pagination',
  templateUrl: './season-and-pagination.component.html',
  styleUrls: ['./season-and-pagination.component.scss'],
})
export class SeasonAndPaginationComponent {
  @Input() limit = 0;
  @Input() offset = 0;
  @Input() total = 0;
  @Output() offsetChange = new EventEmitter<number>();

  years = [2018, 2019, 2020, 2021, 2022];
  pagination = [10, 15, 25];

  constructor(private f1Service: F1Service) {}

  onSeasonYearSelected(year: string) {
    this.offsetChange.next(0);
    this.f1Service.setYear(year);
  }

  onPaginationSelected(n: string) {
    this.offsetChange.next(0);
    this.f1Service.setPagination(n);
  }

  next() {
    this.offsetChange.next(this.offset + this.limit);
  }

  prev() {
    this.offsetChange.next(this.offset - this.limit);
  }
}
