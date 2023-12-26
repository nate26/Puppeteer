import { TestBed } from '@angular/core/testing';

import { MansionDataService } from './mansion-data.service';

describe('MansionDataService', () => {
  let service: MansionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MansionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
