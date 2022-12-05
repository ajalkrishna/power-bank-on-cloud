import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityTcComponent } from './utility-tc.component';

describe('UtilityTcComponent', () => {
  let component: UtilityTcComponent;
  let fixture: ComponentFixture<UtilityTcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityTcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
