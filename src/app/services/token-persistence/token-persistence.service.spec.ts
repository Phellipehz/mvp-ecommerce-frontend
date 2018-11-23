import { TestBed } from '@angular/core/testing';

import { TokenPersistenceService } from './token-persistence.service';

describe('TokenPersistenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenPersistenceService = TestBed.get(TokenPersistenceService);
    expect(service).toBeTruthy();
  });
});
