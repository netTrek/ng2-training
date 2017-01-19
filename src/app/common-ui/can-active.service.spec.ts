/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanActiveService } from './can-active.service';

describe('CanActiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActiveService]
    });
  });

  it('should ...', inject([CanActiveService], (service: CanActiveService) => {
    expect(service).toBeTruthy();
  }));
});
