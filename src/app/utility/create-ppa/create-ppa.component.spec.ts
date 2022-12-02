import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePpaComponent } from './create-ppa.component';

describe('CreatePpaComponent', () => {
  let component: CreatePpaComponent;
  let fixture: ComponentFixture<CreatePpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
