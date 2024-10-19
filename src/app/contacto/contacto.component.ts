import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit{

  usuario = {
    name:"SirYorch",
    correo: "jcuevam3@est.ups.edu.ec",
    bio: "Contenido de github",
    avatar_url: "direccion del avatar"
  };

    // uso de servicios
    constructor(private datosService: DatosService){

    }

    datos:any;

    ngOnInit(): void {
      // Nos suscribimos al Observable para obtener los datos cuando estén disponibles
      this.datosService.getData().subscribe(
        data => {
          this.datos = data;
          console.log(this.datos);
        },
        error => {
          console.error('Error al obtener los datos', error);
        }
      ); 
    }
  


}
