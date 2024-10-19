import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  //'https://api.github.com/users'

  constructor(private http: HttpClient) {

  }
  
  getData(): Observable<any> {
    // Retornamos el Observable de la solicitud HTTP
    return this.http.get<any>('https://api.github.com/users/SirYorch');
  }

  async obtenerDatosUsuario(): Promise<any> {
    return this.http.get(`https://api.github.com/users/SirYorch`);
  }

}