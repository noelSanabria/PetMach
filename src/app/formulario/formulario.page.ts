import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})


export class FormularioPage implements OnInit {

  formulariocompatibilidad: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController:AlertController) {
    this.formulariocompatibilidad = this.fb.group({
      'nombre': new FormControl("", [Validators.required]),
      'edad': new FormControl("", [Validators.required])
    })
     }

  ngOnInit() {
  }
  async ver() {
    var f = this.formulariocompatibilidad.value;

    if(this.formulariocompatibilidad.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      })

      await alert.present();
      return;
    }

var compatibilidad = {
  nombre: f.nombre,
  edad: f.edad
}

  }

}
