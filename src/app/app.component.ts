import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { F1Service } from './services/f1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'RxF1';

  constructor(private router: Router, private f1Service: F1Service) {
    router.events.subscribe((val) => {
      this.f1Service.setOffset('0');
      this.f1Service.setPagination('10');
    });
  }

  ngOnInit(): void {}
}
