import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { RacesComponent } from './components/races/races.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'drivers',
    component: DriversComponent,
  },
  {
    path: 'races',
    component: RacesComponent,
  },
  { path: '', redirectTo: 'drivers', pathMatch: 'full' },
  { path: '**', component: DriversComponent },
];

@NgModule({
  declarations: [AppComponent, DriversComponent, RacesComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
