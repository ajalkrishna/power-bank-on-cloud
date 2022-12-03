import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpaFormComponent } from './ppa-form.component';

describe('PpaFormComponent', () => {
  let component: PpaFormComponent;
  let fixture: ComponentFixture<PpaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
