import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { UsuarioAllPage } from './usuario-all.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsuarioAllPage', () => {
  let component: UsuarioAllPage;
  let fixture: ComponentFixture<UsuarioAllPage>;

  beforeEach(waitForAsync(() => {


    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
     })
    fixture = TestBed.createComponent(UsuarioAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
