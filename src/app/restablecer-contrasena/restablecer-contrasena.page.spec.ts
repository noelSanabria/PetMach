import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { RestablecerContrasenaPage } from './restablecer-contrasena.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
describe('RestablecerContrasenaPage', () => {
  let component: RestablecerContrasenaPage;
  let fixture: ComponentFixture<RestablecerContrasenaPage>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
     })
    fixture = TestBed.createComponent(RestablecerContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
