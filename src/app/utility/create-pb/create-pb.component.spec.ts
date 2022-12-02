import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePbComponent } from './create-pb.component';

describe('CreatePbComponent', () => {
  let component: CreatePbComponent;
  let fixture: ComponentFixture<CreatePbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
