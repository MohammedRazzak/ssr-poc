import { TestBed } from '@angular/core/testing';

import { SsrServicesService } from './ssr-services.service';

describe('SsrServicesService', () => {
  let service: SsrServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsrServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
