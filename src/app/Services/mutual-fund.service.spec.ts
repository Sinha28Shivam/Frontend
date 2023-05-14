import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MutualFundService } from './mutual-fund.service';

describe('MutualFundService', () => {
  let service: MutualFundService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [MutualFundService],
      
    });
    service = TestBed.inject(MutualFundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
