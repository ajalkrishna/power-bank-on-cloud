import { TestBed } from '@angular/core/testing';

import { BuyDataService } from './buy-data.service';

describe('BuyDataService', () => {
  let service: BuyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
