import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../models/articulo.interface';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {
//variables
nombre?:string;
precio?:number;
articulo:Articulo;
  // pasa un parametro utilizando:inyeccion de dependencias
  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    //recibir todos los parametros
    //this.nombre=this.ruta.snapshot.params.nombre;
    //this.precio=this.ruta.snapshot.params.precio;
    this.articulo=this.ruta.snapshot.params.articulo;
    //console.log(this.ruta.snapshot.params.nombre);
  }

}
