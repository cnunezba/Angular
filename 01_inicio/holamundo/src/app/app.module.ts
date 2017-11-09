import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MatButtonModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // exports: []
  bootstrap: [AppComponent]
})
export class AppModule { }
