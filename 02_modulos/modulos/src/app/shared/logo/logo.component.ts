import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  public logo: string;
  constructor() { }

  ngOnInit() {
    this.logo = '../../../assets/angular_logo.svg';
  }

}
