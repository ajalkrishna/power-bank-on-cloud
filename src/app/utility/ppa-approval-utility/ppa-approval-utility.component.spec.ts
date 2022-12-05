import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpaApprovalUtilityComponent } from './ppa-approval-utility.component';

describe('PpaApprovalUtilityComponent', () => {
  let component: PpaApprovalUtilityComponent;
  let fixture: ComponentFixture<PpaApprovalUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpaApprovalUtilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpaApprovalUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
