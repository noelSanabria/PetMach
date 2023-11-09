import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClProducto } from '../model/Clproducto';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  productos: ClProducto[] = [];

  constructor(
    public restApi: ProductServiceService,
    public loadingController: LoadingController,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  async navigateToElegirMascota(raza: string, edad: number) {
    this.router.navigate(['/elegir-mascota'], {
      queryParams: { raza: raza, edad: edad }
    });
  }

  async getProducts() {
    const loading = await this.loadingController.create({
      message: 'Harrys Loading...'
    });

    await this.restApi.getProducts().subscribe({
      next: (res) => {
        this.productos = res.filter(producto => producto.codigo === '08-G05');
        loading.dismiss();
      },
      complete: () => {},
      error: (err) => {
        console.log("Err:" + err);
        loading.dismiss();
      }
    })
  }
}
