import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';

describe(' RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture< RegistroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPage],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot()],
      providers: [AuthService, NavController],
    }).compileComponents();

    fixture = TestBed.createComponent( RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
