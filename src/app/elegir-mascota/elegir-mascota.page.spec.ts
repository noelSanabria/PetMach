import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { ElegirMascotaPage } from './elegir-mascota.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('ElegirMascotaPage', () => {
  let component: ElegirMascotaPage;
  let fixture: ComponentFixture<ElegirMascotaPage>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
     })





    
    fixture = TestBed.createComponent(ElegirMascotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
