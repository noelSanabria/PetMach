import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from '../model/Usuario';
import { UsuarioServiceService } from '../usuario-servicio.servicio';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.page.html',
  styleUrls: ['./usuario-add.page.scss'],
})
export class UsuarioAddPage implements OnInit {
//Creamos una variable del tipo FormGroup
  // ! ==> Con esto le decimos a TS, que sabemos que la variable no esta inicializada
  //          y que estamos seguro que cuando se ejecute no será null
  usuarioForm!: FormGroup;
  // Generalmente se usa una interface, sin embargo para jugar utilizaremos  una clase
  usuario: Usuario = {
  id: 1505
  , nombre: 'Harrys el Magnifico'
  , mail: 'harrys@elmagnifico.com'
  , password: 'harrys1234'
  , cfecha: new Date
  };
  constructor(
    private formBuilder: FormBuilder,
    // Injectamos las librerías necesarias
    private loadingController: LoadingController,
    private restApi: UsuarioServiceService,
    private router: Router,
  ) { }

  ngOnInit() {// Especificamos que todos los campos son obligatorios
    this.usuarioForm = this.formBuilder.group({
      "user_name": [null, Validators.required],
      'user_mail': [null, Validators.required],
      'user_pass': [null, Validators.required],
    })
  }

  // se ejecutará cuando presione el Submit
  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit del Product ADD")

    // Creamos un Loading Controller, Ojo no lo muestra
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    // Muestra el Loading Controller
    await loading.present();

    // Ejecuta el método del servicio y los suscribe
    await this.restApi.addUsuario(this.usuario)
      .subscribe({
        next: (res) => {
          console.log("Next AddUsuario Page",res)
          loading.dismiss(); //Elimina la espera
          if (res== null){ // No viene respuesta del registro
            console.log("Next No Agrego, Ress Null ");
            return
          }
          // Si viene respuesta
          console.log("Next Agrego SIIIIII Router saltaré ;",this.router);
          this.router.navigate(['/usuario-list']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error AddUsuario Página",err);
          loading.dismiss(); //Elimina la espera
        }
      });
    console.log("Observe que todo lo del suscribe sale después de este mensaje")
  }

}
