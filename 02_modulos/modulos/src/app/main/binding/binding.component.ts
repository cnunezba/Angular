import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public nombre: string;
  public isSpanish: boolean;

  constructor() { }

  ngOnInit() {
    this.nombre = '';
    this.isSpanish = false;
  }

  borrarFormulario () {
    this.nombre = '';
  }

}
