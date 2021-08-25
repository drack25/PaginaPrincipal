import { Component, OnInit } from '@angular/core';
import { Puntoventa } from 'src/app/service/PuntosVenta/pventa';
import { PventaService } from 'src/app/service/PuntosVenta/pventa.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  pventas: Puntoventa[] = [];
  tamanTotal!: number;
  pageActual: number = 1;

  constructor(private pventaService: PventaService) { }

  ngOnInit(): void {
    this.getPuntoVenta();
  }

  private getPuntoVenta(){
    this.pventaService.getPuntoVentaLista().subscribe(data => {
      this.tamanTotal = data.length;
      this.pventas = data;
    });
  }

}
