import { Component } from '@angular/core';
import { Fornecedor } from '../../shared/modelo/fornecedor';
import { FORNECEDORES } from '../../shared/modelo/FORNECEDORES';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mantem-fornecedores',
  templateUrl: './mantem-fornecedor.component.html',
  styleUrls: ['./mantem-fornecedor.component.css']
})
export class MantemFornecedoresComponent {

  fornecedorDeManutencao: Fornecedor;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  fornecedor = FORNECEDORES;
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.fornecedorDeManutencao = new Fornecedor('', 0);
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      const fornecedorEncontrado = this.fornecedor.find(
        fornecedor => fornecedor.cnpj === idParaEdicao);
      if (fornecedorEncontrado) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.fornecedorDeManutencao = fornecedorEncontrado;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastrando && this.fornecedorDeManutencao) {
      this.fornecedor.push(this.fornecedorDeManutencao);
    }
    this.fornecedorDeManutencao = new Fornecedor();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemfornecedores']);
  }


}
