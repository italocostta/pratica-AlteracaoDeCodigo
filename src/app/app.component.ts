import { Component } from '@angular/core';
import {Usuario} from './shared/modelo/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-angular-alunos';

  usuarioDeManutencao: Usuario;
  usuarios: Array<Usuario>;
  constructor() {
    this.usuarioDeManutencao = new Usuario('', 0);
    this.usuarios = [
      new Usuario('carlos eduardo', 20, '123'),
      new Usuario('Filipe Augusto', 24, '456'),
      new Usuario('ANDRÉ PADILHA', 25, '789')
    ];
  }

  cadastrar(): void {
    this.usuarios.push(this.usuarioDeManutencao);
    this.usuarioDeManutencao = new Usuario();
  }

  excluir(usuarioARemover: Usuario): void {
    const indx = this.usuarios.findIndex(usuario =>
      usuario.cpf === usuarioARemover.cpf);

    this.usuarios.splice(indx, 1);
  }

  editar(usuario: Usuario): void {
    this.usuarioDeManutencao = usuario;
  }
}
