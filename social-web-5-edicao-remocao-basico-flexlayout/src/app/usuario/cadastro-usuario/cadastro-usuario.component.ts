import {Component, OnInit} from '@angular/core';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import {Usuario} from '../../shared/model/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor(private usuarioService: UsuarioService) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  inserirUsuario(): void {
    this.usuarioService.inserir(this.usuario);
    this.usuario = new Usuario();
  }

}
