import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { F1Service } from './services/f1.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'RxF1';
  years = [2018, 2019, 2020, 2021, 2022];

  constructor(private f1Service: F1Service) {}

  ngOnInit(): void {}

  onSeasonYearSelected(year: string) {
    this.f1Service.setYear(year);
  }
}
