import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CpfPipe} from './pipe/cpf.pipe';
import { CnpjPipe } from './pipe/cnpj.pipe';


@NgModule({
  declarations: [CpfPipe, CnpjPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe,
    CnpjPipe
  ]
})
export class PipesModule { }
