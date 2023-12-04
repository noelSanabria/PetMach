import { TestBed } from '@angular/core/testing';
import { UsuarioServiceService } from './usuario.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('UsuarioService', () => {
  let service: UsuarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [UsuarioServiceService],
    });
    service = TestBed.inject(UsuarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
