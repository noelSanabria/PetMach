import { ComponentFixture, TestBed ,waitForAsync} from '@angular/core/testing';
import { ProductListPage } from './product-list.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';


describe('ProductListPage', () => {
  let component: ProductListPage;
  let fixture: ComponentFixture<ProductListPage>;


  

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
     imports: [HttpClientModule, RouterTestingModule]
    })

    fixture = TestBed.createComponent(ProductListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
