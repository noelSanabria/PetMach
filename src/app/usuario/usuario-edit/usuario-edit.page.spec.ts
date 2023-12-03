import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { UsuarioEditPage } from './usuario-edit.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsuarioEditPage', () => {
  let component: UsuarioEditPage;
  let fixture: ComponentFixture<UsuarioEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
     })

    fixture = TestBed.createComponent(UsuarioEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
