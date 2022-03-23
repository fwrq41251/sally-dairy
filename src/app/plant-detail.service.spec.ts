import { TestBed } from '@angular/core/testing';

import { PlantDetailService } from './plant-detail.service';

describe('PlantDetailService', () => {
  let service: PlantDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
