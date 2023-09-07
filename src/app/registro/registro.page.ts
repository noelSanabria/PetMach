import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioregistro: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public toastController: ToastController, 
    public router: Router 
  ) {
    this.formularioregistro = this.fb.group({
      'correo': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar() {
    const f = this.formularioregistro.value;

    
    if (this.formularioregistro.get('correo')?.hasError('email')) {
      const alert = await this.alertController.create({
        header: 'Correo Electrónico Inválido',
        message: 'Por favor, ingresa un correo electrónico válido.',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }

    
    if (!this.validarPassword(f.password)) {
      const alert = await this.alertController.create({
        header: 'Contraseña Inválida',
        message: 'La contraseña debe tener al menos 4 números, 3 caracteres y 1 letra mayúscula.',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }

    if (this.formularioregistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Tienes que llenar todos los datos!',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }

    

    
    this.router.navigate(['/login']);

    
    const toast = await this.toastController.create({
      message: 'Registro exitoso. Puede iniciar sesión ahora.',
      duration: 3000,
      position: 'top', 
      color: 'success'
    });

    await toast.present();
  }

  validarPassword(password: string): boolean {
    // Validar si la contraseña cumple con los requisitos
    const regex = /^(?=.*[0-9]{4})(?=.*[a-zA-Z]{3})(?=.*[A-Z]{1}).{8,}$/;
    return regex.test(password);
  }
}
