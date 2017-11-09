import { User, UserModel } from './../../models/users';
import { Printer, PrinterModel } from './../../models/printers';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartamentoModel } from '../../models/departaments';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  aPrinters: Array<Printer>;
  impresoraSeleccionada: Printer;
  mostrarFinal: boolean;

  @ViewChild ('myForm') form: any;

  usuario: User;

  constructor() { }

  ngOnInit() {
    this.aPrinters = [
      new PrinterModel (1, 'HP', 'Tinta'),
      new PrinterModel (2, 'Brother', 'laser'),
      {id: 3, modelo: 'Xerox', tipo: 'laser'}
    ];

    this.usuario = new UserModel();
    this.mostrarFinal = false;

    console.log(this.form);
  }

  enviar() {
    this.mostrarFinal = true;
  }

}
