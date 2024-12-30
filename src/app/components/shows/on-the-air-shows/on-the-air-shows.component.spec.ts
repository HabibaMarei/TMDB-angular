import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTheAirShowsComponent } from './on-the-air-shows.component';

describe('OnTheAirShowsComponent', () => {
  let component: OnTheAirShowsComponent;
  let fixture: ComponentFixture<OnTheAirShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnTheAirShowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnTheAirShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
