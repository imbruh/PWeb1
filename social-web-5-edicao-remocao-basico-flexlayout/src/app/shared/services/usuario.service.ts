import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Usuario} from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url_usuarios = 'http://localhost:3000/usuarios';

  constructor(private httpClient: HttpClient){    
  }

  listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url_usuarios);
  }


  inserir(usuario: Usuario): Observable<Usuario> {
   return this.httpClient.post<Usuario>(this.url_usuarios, usuario);
  }
}
