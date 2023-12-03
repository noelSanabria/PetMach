import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-elegir-mascota',
  templateUrl: './elegir-mascota.page.html',
  styleUrls: ['./elegir-mascota.page.scss'],
})
export class ElegirMascotaPage implements OnInit {
  mensaje: string = "";
  fotoMascota: SafeResourceUrl | undefined;
  fotosMascotas: { id: number, foto: SafeResourceUrl }[] = [];
  informacionExtra: string = "";
  raza: string = "";
  edad: number = 0;

  constructor(private rutaActiva: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router) {
    this.rutaActiva.queryParams.subscribe((params) => {
      if (params['nombreUsuario'])
       {
        this.mensaje = params['nombreUsuario'];
      }
      
       });
  }

  ngOnInit() {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    if (image && image.dataUrl) {
      const nuevaFoto = {
        id: this.fotosMascotas.length + 1,
        foto: this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl)
      };

      this.fotosMascotas.push(nuevaFoto);
    }
  }

  eliminarFoto(id: number) {
    this.fotosMascotas = this.fotosMascotas.filter(mascota => mascota.id !== id);
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}
