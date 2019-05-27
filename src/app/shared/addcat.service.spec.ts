import { TestBed } from '@angular/core/testing';

import { AddcatService } from './addcat.service';

describe('AddcatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddcatService = TestBed.get(AddcatService);
    expect(service).toBeTruthy();
  });
});
