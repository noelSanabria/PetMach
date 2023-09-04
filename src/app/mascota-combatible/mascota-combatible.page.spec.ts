import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MascotaCombatiblePage } from './mascota-combatible.page';

describe('MascotaCombatiblePage', () => {
  let component: MascotaCombatiblePage;
  let fixture: ComponentFixture<MascotaCombatiblePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MascotaCombatiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
