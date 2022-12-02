import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGeneratorsComponent } from './my-generators.component';

describe('MyGeneratorsComponent', () => {
  let component: MyGeneratorsComponent;
  let fixture: ComponentFixture<MyGeneratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGeneratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGeneratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
