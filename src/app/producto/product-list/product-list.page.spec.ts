
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListPage } from './product-list.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('ProductListPage', () => {
  let component: ProductListPage;
  let fixture: ComponentFixture<ProductListPage>;

  
  beforeEach(async() => {

    const activatedRouteStub = { snapshot: { params: [] } };


    await TestBed.configureTestingModule({
      declarations: [ProductListPage],
      imports: [IonicModule.forRoot(),HttpClientTestingModule],

      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }  
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(ProductListPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});