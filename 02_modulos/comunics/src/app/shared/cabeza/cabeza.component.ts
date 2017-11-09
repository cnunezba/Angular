import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit, OnDestroy {

  public title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Uso de Modulos';
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
