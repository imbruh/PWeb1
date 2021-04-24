import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import {Usuario} from '../../shared/model/usuario';
import { MensagemService } from 'src/app/shared/services/mensagem.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario;

  operacaoCadastro = true;

  constructor(private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute, private roteador: Router, private mensagemService: MensagemService) {
    this.usuario = new Usuario();
    if(this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      //pegar do banco usuario id = idParaEdicao
      this.usuarioService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.usuario = usuarioRetornado 
      );
    }
  }

  ngOnInit(): void {
  }

  inserirUsuario(): void {
    if(this.usuario.id) {
      this.usuarioService.atualizar(this.usuario).subscribe(
        usuarioAlterado => {
          this.mensagemService.sucess('Usuario alterado com sucesso');
          this.roteador.navigate(['listarUsuarios']);
        }
      );
    } 
    else {
      this.usuarioService.inserir(this.usuario).subscribe(      
        usuarioInserido => {
        this.mensagemService.sucess(`Usuario ${usuarioInserido.nome} cadastrado com sucesso`)
          this.roteador.navigate(['listarUsuarios']);
        }      
      );
    }   
  }
}
