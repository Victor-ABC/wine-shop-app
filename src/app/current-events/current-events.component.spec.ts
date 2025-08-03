import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentEventsComponent } from './current-events.component';

describe('CurrentEventsComponent', () => {
  let component: CurrentEventsComponent;
  let fixture: ComponentFixture<CurrentEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
