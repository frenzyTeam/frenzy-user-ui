import { TestBed, async, inject } from '@angular/core/testing';

import { DeauthGuard } from './deauth.guard';

describe('DeauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeauthGuard]
    });
  });

  it('should ...', inject([DeauthGuard], (guard: DeauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
