import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonAndPaginationComponent } from './season-and-pagination.component';

describe('SeasonAndPaginationComponent', () => {
  let component: SeasonAndPaginationComponent;
  let fixture: ComponentFixture<SeasonAndPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonAndPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonAndPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
