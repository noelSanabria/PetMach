import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private rutaActiva: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.rutaActiva.queryParams.subscribe((params) => {
      if (params['nombreUsuario']) {
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
      this.fotoMascota = this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl);
    }
  }
}
