import { TestBed } from '@angular/core/testing';

import { AlterService } from './alter.service';

describe('AlterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlterService = TestBed.get(AlterService);
    expect(service).toBeTruthy();
  });
});
