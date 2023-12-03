import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { FormularioPage } from './formulario.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
describe('FormularioPage', () => {
  let component: FormularioPage;
  let fixture: ComponentFixture<FormularioPage>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
     })




    fixture = TestBed.createComponent(FormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
