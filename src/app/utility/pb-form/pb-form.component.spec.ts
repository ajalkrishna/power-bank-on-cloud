import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbFormComponent } from './pb-form.component';

describe('PbFormComponent', () => {
  let component: PbFormComponent;
  let fixture: ComponentFixture<PbFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
