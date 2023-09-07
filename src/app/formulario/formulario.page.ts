import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})

export class FormularioPage implements OnInit {

  formulariocompatibilidad: FormGroup;
  botonHabilitado = false;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
    this.formulariocompatibilidad = this.fb.group({
      'nombre': new FormControl("", [Validators.required]),
      'edad': new FormControl("", [Validators.required])
    });

    this.formulariocompatibilidad.valueChanges.subscribe(() => {
      this.botonHabilitado = !this.formulariocompatibilidad.invalid;
    });
  }

  ngOnInit() {
  }

  async ver() {
    var f = this.formulariocompatibilidad.value;

    if (this.formulariocompatibilidad.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Tienes que llenar todos los campos.',
        buttons: ['Aceptar']
      });

      await alert.present();
    } else {
      this.navCtrl.navigateForward('/siguiente-pagina');
    }
  }
}
