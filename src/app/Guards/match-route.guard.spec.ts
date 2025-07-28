import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { matchRouteGuard } from './match-route.guard';

describe('matchRouteGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => matchRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
