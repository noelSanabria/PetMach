import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductAllPage } from './product-all.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductAllPage', () => {
  let component: ProductAllPage;
  let fixture: ComponentFixture<ProductAllPage>;

  beforeEach(waitForAsync(() => {


    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule]
     })

    fixture = TestBed.createComponent(ProductAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
