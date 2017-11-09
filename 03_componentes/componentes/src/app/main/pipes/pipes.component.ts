import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre: string;
  number: number;
  precio: number;
  datos: {autor: string; libro: string};
  fecha: Date;

  constructor() { }

  ngOnInit() {
    this.nombre = 'pepe perez';
    this.number = 30.14;
    this.precio = 200.25;
    this.datos = {autor : 'luis', libro : 'mi Libro'};
    this.fecha = new Date();
  }

}
