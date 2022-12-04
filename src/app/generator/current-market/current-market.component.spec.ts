import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMarketComponent } from './current-market.component';

describe('CurrentMarketComponent', () => {
  let component: CurrentMarketComponent;
  let fixture: ComponentFixture<CurrentMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
