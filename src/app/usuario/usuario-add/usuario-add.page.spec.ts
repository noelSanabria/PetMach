import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { UsuarioAddPage } from './usuario-add.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
describe('UsuarioAddPage', () => {
  let component: UsuarioAddPage;
  let fixture: ComponentFixture<UsuarioAddPage>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
     })
    fixture = TestBed.createComponent(UsuarioAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
