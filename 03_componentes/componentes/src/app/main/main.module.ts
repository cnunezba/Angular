import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ListaComponent, PipesComponent, FormularioComponent, FormReactiveComponent],
  exports: [ListaComponent, PipesComponent, FormularioComponent, FormReactiveComponent]
})
export class MainModule { }
