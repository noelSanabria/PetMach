import { ComponentFixture, TestBed,waitForAsync,} from '@angular/core/testing';
import { CamaraPage } from './camara.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('CamaraPage', () => {
  let component: CamaraPage;
  let fixture: ComponentFixture<CamaraPage>;


  

  beforeEach(waitForAsync(() => {
     TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
     })





    fixture = TestBed.createComponent(CamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
