import { TestBed } from '@angular/core/testing';

import { VeggieHiveService } from './veggie-hive.service';

describe('VeggieHiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeggieHiveService = TestBed.get(VeggieHiveService);
    expect(service).toBeTruthy();
  });
});
