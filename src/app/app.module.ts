import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { RacesComponent } from './components/races/races.component';
import { RouterModule, Routes } from '@angular/router';
import { SeasonAndPaginationComponent } from './components/season-and-pagination/season-and-pagination.component';
import { QualifyingComponent } from './components/qualifying/qualifying.component';
import { DriverStandingsComponent } from './components/driver-standings/driver-standings.component';
import { BonusComponent } from './components/bonus/bonus.component';

const routes: Routes = [
  {
    path: 'drivers',
    component: DriversComponent,
  },
  {
    path: 'races',
    component: RacesComponent,
  },
  {
    path: 'qualifying',
    component: QualifyingComponent,
  },
  {
    path: 'standings',
    component: DriverStandingsComponent,
  },
  {
    path: 'bonus',
    component: BonusComponent,
  },
  { path: '', redirectTo: 'drivers', pathMatch: 'full' },
  { path: '**', component: DriversComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    RacesComponent,
    SeasonAndPaginationComponent,
    QualifyingComponent,
    DriverStandingsComponent,
    BonusComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
