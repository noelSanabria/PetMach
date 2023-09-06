import {AlertController} from '@ionic/angular';
import {Component, OnInit} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formulariologin: FormGroup;

  constructor(public fb: FormBuilder,
    public AlertController: AlertController,
    private router: Router) {
    this.formulariologin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", [
        Validators.required,
        Validators.pattern(/^(?=.*[0-9].*[0-9].*[0-9].*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z])([a-zA-Z0-9]+)$/),
      ]),
    });
  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    if (this.formulariologin.valid) {
      const nombreUsuario = this.formulariologin.value.nombre;
      this.router.navigate(['/elegir-mascota', { username: nombreUsuario }]);
    } else {
      console.log('El formulario no es válido.');
    }
  }
}
