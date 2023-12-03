import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { UsuarioListPage } from './usuario-list.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsuarioListPage', () => {
  let component: UsuarioListPage;
  let fixture: ComponentFixture<UsuarioListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
     })

    fixture = TestBed.createComponent(UsuarioListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
