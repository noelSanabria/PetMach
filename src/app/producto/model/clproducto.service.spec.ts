import { TestBed } from '@angular/core/testing';

import { CLproductoService } from './clproducto.service';

describe('CLproductoService', () => {
  let service: CLproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CLproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
