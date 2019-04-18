import { TestBed } from '@angular/core/testing';

import { ToolJsService } from './tool-js.service';

describe('ToolJsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolJsService = TestBed.get(ToolJsService);
    expect(service).toBeTruthy();
  });
});
