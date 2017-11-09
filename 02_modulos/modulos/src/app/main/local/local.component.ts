import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-local',
  // encapsulation: ViewEncapsulation.Native,
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  @ViewChild ('nombre') nombre: any;

  constructor() { }

  ngOnInit() {
  }

}
