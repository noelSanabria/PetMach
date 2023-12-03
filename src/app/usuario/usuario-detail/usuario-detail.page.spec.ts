import { ComponentFixture, TestBed,waitForAsync} from '@angular/core/testing';
import { UsuarioDetailPage } from './usuario-detail.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsuarioDetailPage', () => {
  let component: UsuarioDetailPage;
  let fixture: ComponentFixture<UsuarioDetailPage>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
     })

    fixture = TestBed.createComponent(UsuarioDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
