import { Component } from '@angular/core';
import { Fornecedor } from '../../shared/modelo/fornecedor';
import {FORNECEDORES} from '../../shared/modelo/FORNECEDORES'

@Component({
  selector: 'app-listagem-fornecedores',
  templateUrl: './listagem-fornecedores.component.html',
  styleUrls: ['./listagem-fornecedores.component.css']
})
export class ListagemFornecedoresComponent {
 
  fornecedores = FORNECEDORES;
  excluir(fornecedorARemover: Fornecedor): void {
    const indx = this.fornecedores.findIndex(fornecedor =>
      fornecedor.cnpj === fornecedorARemover.cnpj);

    this.fornecedores.splice(indx, 1);
  }
}
