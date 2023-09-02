import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElegirMascotaPage } from './elegir-mascota.page';

describe('ElegirMascotaPage', () => {
  let component: ElegirMascotaPage;
  let fixture: ComponentFixture<ElegirMascotaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElegirMascotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
