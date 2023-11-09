import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ClProducto } from '../model/Clproducto';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {
  productForm!: FormGroup;
  producto: ClProducto = {
    codigo: "08-G05",
    nombreprod: "0",
    precio: 0,
    cantidad: 0,
    rut: 0,
    dv: "0",
    enfermedad: "0",
    fonocontacto: 0,
    categoria: "0",
    editorial: "0",
    raza: "",
    edad: 0,
    altura: 0,
    hrini: "0",
    hrfin: "0",
    direccion: "0",
  };
  idProducto: any = '';

  constructor(
    public restApi: ProductServiceService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log("ngOnInit ID:" + this.route.snapshot.params['id']);
    this.getProduct(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
      'prod_raza': [null, Validators.required],
      'prod_edad': [null, Validators.required],
    });
  }

  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit ID:" + this.idProducto);
    this.producto.idProducto = this.idProducto; // Mueve esta línea antes de la llamada a updateProduct

    await this.restApi.updateProduct(this.idProducto, this.producto)
      .subscribe({
        next: (res) => {
          let idProducto = res['idProducto'];
          this.router.navigate(['/product-detail/' + this.idProducto]);
        },
        complete: () => {},
        error: (err) => {
          console.log(err);
        }
      });
  }

  async getProduct(idProducto: String) {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });

    await loading.present();

    await this.restApi.getProduct(idProducto)
      .subscribe({
        next: (data) => {
          console.log("getProductID data****");
          console.log(data);

          this.idProducto = data.idProducto;
          this.productForm.setValue({
            prod_raza: data.raza,
            prod_edad: data.edad,
          });

          loading.dismiss();
        },
        complete: () => {},
        error: (err) => {
          console.log("getProductidProducto Errr****+");
          console.log(err);
          loading.dismiss();
        }
      });
  }

  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/product-list']);
          }
        }
      ]
    });

    await alert.present();
  }
}
