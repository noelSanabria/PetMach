import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin = {
    
    nombre:  "",
    password: ""
  }

  
  constructor(private router: Router ) {  }

  ngOnInit(): void {
  }
  
  iniciarSesion() {
    
    console.log("nombre" +  this.formLogin.nombre)
    console.log("password" + this.formLogin.password)

    let datosEnviar : NavigationExtras = {
      queryParams : {nombreUsuario: this.formLogin.nombre ,
                      edad: 25
      }         
    }
     

    this.router.navigate(['/elegir-mascota'], datosEnviar);

  }
  
}