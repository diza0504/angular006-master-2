import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo.interface';
//Interfaz para el componente

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  articulos:Array<Articulo>=new Array<Articulo>();
  constructor() { }

  ngOnInit(): void {
    this.articulos.push({
      nombre:"PC con Windows 10",
      descripcion:"Marca Lenovo",precio:900
    },
    {
      nombre:"Mack Book Pro",
      descripcion:"Lapto con pantalla de apple",precio:2000
    },
    {
      nombre:"Tabled de 10 pulgadas",
      descripcion:"Marca Samsung 2da Generación",precio:100
    },
    );
  }

}
