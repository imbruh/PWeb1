import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import {Usuario} from '../../shared/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-usuario-tabela',
  templateUrl: './listagem-usuario-tabela.component.html',
  styleUrls: ['./listagem-usuario-tabela.component.scss']
})
export class ListagemUsuarioTabelaComponent implements OnInit {

  usuarios: MatTableDataSource<Usuario>;
  mostrarColunas = ['id', 'nome', 'cpf', 'idade', 'acoes'];

  constructor(private usuarioService: UsuarioService, private roteador: Router) { }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = new MatTableDataSource<Usuario>(usuarios)
    );
  }

  filtrar(value: string): void {
    this.usuarios.filter = value.trim().toLowerCase();
  }

  apagar(id: number): void {
    this.usuarioService.remover(id).subscribe(
      apagado => {
        const indx = this.usuarios.data.findIndex(usuario=> usuario.id === id);
        if(indx > -1) {
          this.usuarios.data.splice(indx, 1);
          this.usuarios = new MatTableDataSource<Usuario>(this.usuarios.data);
        }
      }
    );
  }

  editar(usuario: Usuario): void {
    this.roteador.navigate(['cadastrarUsuario', usuario.id]);
  }
}
