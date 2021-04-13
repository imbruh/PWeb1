import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import {Usuario} from '../../shared/model/usuario';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios: Array<Usuario>;

  constructor(private usuarioService: UsuarioService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  editar(usuario: Usuario): void {
    this.roteador.navigate(['cadastrarUsuario', usuario.id]);
  }

  remover(usuario: Usuario): void {
    this.usuarioService.remover(usuario.id).subscribe(
      resposta => {
        const indxUsuarioARemover = this.usuarios.findIndex(u => u.cpf === usuario.cpf);
        if (indxUsuarioARemover > -1) {
          this.usuarios.splice(indxUsuarioARemover, 1);
        }
      }
    );   
  }

}
