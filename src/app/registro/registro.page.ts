import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})


export class RegistroPage implements OnInit {

  formularioregistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioregistro = this.fb.group({
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar() {
    var f = this.formularioregistro.value;

    if(this.formularioregistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Tienes que llenar todos los datos!',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    };
  }

}
