import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { ListagemUsuarioComponent } from './usuario/listagem-usuario/listagem-usuario.component';
import { ListagemUsuarioTabelaComponent } from './usuario/listagem-usuario-tabela/listagem-usuario-tabela.component';

const routes: Routes = [
  {
    path: 'cadastrarUsuario',
    component: CadastroUsuarioComponent
  },
  {
    path: 'cadastrarUsuario/:id',
    component: CadastroUsuarioComponent
  },
  {
    path: 'listarUsuarios',
    component: ListagemUsuarioComponent
  },
  {
    path: 'listarUsuariostabela',
    component: ListagemUsuarioTabelaComponent
  },
  {
    path: '',
    component: ListagemUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
