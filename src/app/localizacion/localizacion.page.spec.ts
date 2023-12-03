import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { LocalizacionPage } from './localizacion.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LocalizacionPage', () => {
  let component: LocalizacionPage;
  let fixture: ComponentFixture<LocalizacionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
     })




    fixture = TestBed.createComponent(LocalizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
