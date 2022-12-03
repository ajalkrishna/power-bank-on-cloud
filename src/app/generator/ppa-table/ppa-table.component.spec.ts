import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpaTableComponent } from './ppa-table.component';

describe('PpaTableComponent', () => {
  let component: PpaTableComponent;
  let fixture: ComponentFixture<PpaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpaTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
