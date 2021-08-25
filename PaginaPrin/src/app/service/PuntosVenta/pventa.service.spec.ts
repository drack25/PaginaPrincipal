import { TestBed } from '@angular/core/testing';

import { PventaService } from './pventa.service';

describe('PventaService', () => {
  let service: PventaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PventaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
