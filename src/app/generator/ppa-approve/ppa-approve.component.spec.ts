import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpaApproveComponent } from './ppa-approve.component';

describe('PpaApproveComponent', () => {
  let component: PpaApproveComponent;
  let fixture: ComponentFixture<PpaApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpaApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpaApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
