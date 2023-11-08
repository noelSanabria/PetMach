import { Component, OnInit } from '@angular/core';

// Importamos Librerías
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClProducto } from '../model/Clproducto';
//import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  // Creamos la Variable para el Html
  productos: ClProducto[] = [];
  // Injectamos Librerias
  constructor(public restApi: ProductServiceService
    , public loadingController: LoadingController
    , public router: Router) { }

  // LLamamos al método que rescata los productos  
  ngOnInit() {
    this.getProducts();
  }
  filtrarProductosPorCodigo(productos: any[], codigo: '08-G05'): any[] {
    return productos.filter(producto => producto.codigo >= codigo);
  }
  

  // Método  que rescta los productos
  async getProducts() {
    console.log("Entrando :getProducts");
    // Crea un Wait (Esperar)
    const loading = await this.loadingController.create({
      message: 'Harrys Loading...'
    });
    // Muestra el Wait
    await this.restApi.getProducts().subscribe({
      next: (res) => {
        // Filtra los productos que tienen el código
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

  
  // drop(event: CdkDragDrop<string[]>) {
  //   console.log("Moviendo Item Array Drop ***************:");
  //   moveItemInArray(this.productos, event.previousIndex, event.currentIndex);
  // }
}
