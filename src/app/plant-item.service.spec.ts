import { TestBed } from '@angular/core/testing';

import { PlantItemService } from './plant-item.service';

describe('PlantItemService', () => {
  let service: PlantItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
