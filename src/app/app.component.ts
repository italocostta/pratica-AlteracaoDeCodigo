import { Component } from '@angular/core';
import {Usuario} from './shared/modelo/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-angular-alunos';

  usuario: Usuario;
  usuarios: Array<Usuario>;
  constructor() {
    this.usuario = new Usuario();
    this.usuarios = [
      new Usuario('u1', 20),
      new Usuario('u2', 24),
      new Usuario('u3', 25)
    ];
  }

  cadastrar(): void {
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario();
  }
}
