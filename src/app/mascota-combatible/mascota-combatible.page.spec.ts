import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { MascotaCombatiblePage } from './mascota-combatible.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';



describe('MascotaCombatiblePage', () => {
  let component: MascotaCombatiblePage;
  let fixture: ComponentFixture<MascotaCombatiblePage>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
     })

    fixture = TestBed.createComponent(MascotaCombatiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
