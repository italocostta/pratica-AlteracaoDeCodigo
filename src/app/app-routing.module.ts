import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantemUsuarioComponent} from './usuario/mantem-usuario/mantem-usuario.component';
import {ListagemUsuariosComponent} from './usuario/listagem-usuarios/listagem-usuarios.component';
import { ListagemFornecedoresComponent } from './fornecedores/listagem-fornecedores/listagem-fornecedores.component';
import { MantemFornecedoresComponent } from './fornecedores/mantem-fornecedor/mantem-fornecedor.component';

const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },
  {
    path: 'listagemfornecedores',
    component: ListagemFornecedoresComponent
  },
  {
    path: 'cadastrofornecedor',
    component: MantemFornecedoresComponent
  },
  {
    path: 'editafornecedor',
    component: MantemFornecedoresComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
