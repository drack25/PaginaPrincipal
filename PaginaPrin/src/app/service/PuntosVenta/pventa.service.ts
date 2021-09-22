import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Puntoventa } from './pventa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PventaService {

  private baseURL = "https://back-productossan.herokuapp.com";
  constructor(private httpClient: HttpClient) { }

  getPuntoVentaLista(): Observable<Puntoventa[]>{
    return this.httpClient.get<Puntoventa[]>(`${this.baseURL}`+'/PuntoVenta/buscarPuntoVenta');
  }
}
