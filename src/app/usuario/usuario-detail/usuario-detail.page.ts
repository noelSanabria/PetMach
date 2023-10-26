import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { Usuario } from '../model/Usuario';
import { UsuarioServiceService } from '../usuario-servicio.servicio';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.page.html',
  styleUrls: ['./usuario-detail.page.scss'],
})
export class UsuarioDetailPage implements OnInit {
// Creamos registro a utilizar en el Html
  usuario: Usuario = {
  id: 1511
  , nombre: 'Harrys el Magnifico'
  , mail: 'harrys@elmagnifico.com'
  , cfecha: new Date()
  , password: 'harrys1234'
};
  constructor(
    public restApi: UsuarioServiceService
    , public loadingController: LoadingController
    , public alertController: AlertController
    , public route: ActivatedRoute
    , public router: Router
  ) { }

  ngOnInit() {
    this.getUsuario();
  }
  async getUsuario() {
    console.log("getUsuario **************** ParamMap ID:" + this.route.snapshot.paramMap.get('id'));
    // Creamos un Wait
    const loading = await this.loadingController.create({ message: 'Loading...' });
    // Mostramos el Wait
    await loading.present();
    await this.restApi.getUsuario(this.route.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (res) => {
          console.log("Data *****************");
          console.log(res);
          // Si funciona la respuesta la pasamos al producto
          this.usuario = res;
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
          //Si no funcion desplegamos en consola el error
          console.log("Error DetailUsuario Página", err);
          loading.dismiss(); //Elimina la espera
        }
      })
  }
  async delete(id: number) {
    // Confirma Primero
    this.presentAlertConfirm(id, 'Confirme la Eliminación, De lo cantrario Cancele');
  }
  // Creamos una rutina para confirmar la eliminación
  async presentAlertConfirm(id: number, msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!', // Título
      message: msg,   // Mensaje
      buttons: [   // Botones
        {
          text: 'Eliminar : ' + id + " OK",
          handler: () => { // Si presiona ejecuta esto
            //this.router.navigate(['']);
            this.deleteConfirmado(id)
          }
        }
      ]
    });
    // Presenta en pantalla
    await alert.present();
  }

  // Es invocado desde el Alert
  async deleteConfirmado(id: number) {
    alert("Eliminando " + id)
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.restApi.deleteUsuario(id)
      .subscribe({
        next: (res) => {
          console.log("Error DetailUsuario Página", res);
          loading.dismiss();
          this.router.navigate(['/usuario-list']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error DetailUsuario Página", err);
          loading.dismiss(); //Elimina la espera
        }

      })
  }
}
