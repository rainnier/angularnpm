import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxRainnier123xyLibComponent } from './nx-rainnier123xy-lib.component';

describe('NxRainnier123xyLibComponent', () => {
  let component: NxRainnier123xyLibComponent;
  let fixture: ComponentFixture<NxRainnier123xyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NxRainnier123xyLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NxRainnier123xyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
