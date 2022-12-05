import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbTcComponent } from './pb-tc.component';

describe('PbTcComponent', () => {
  let component: PbTcComponent;
  let fixture: ComponentFixture<PbTcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbTcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
